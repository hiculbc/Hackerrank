class QuestionsController < ApplicationController
  def show
    @question = Question.find(params[:id])
    @boilerplates = @question.boiler_plates
    render json: {
      question: @question,
      boilerplate: @boilerplates
    }
  end

  def index
    @questions = Question.all
    render json: @questions
  end

  def check
    @code = params[:code]
    @user_id = params[:user_id]
    @isPython = params[:isPython]
    @question = Question.find(params[:id])
    @tempfile = create_tempfile @isPython
    @tempfile.write(@code)
    @tempfile.rewind
    @testcases = @question.testcases
    @solutions = @question.solutions
    result = []
    solved_question_count = 0
    @testcases.map do |each_testcase|
      if @isPython
        result.append({ testcase: each_testcase,
                        result: execute_python(@tempfile, each_testcase.testcase, each_testcase.solution.answer) })
      else
        result.append({ testcase: each_testcase,
                        result: execute_javascript(@tempfile, each_testcase.testcase, each_testcase.solution.answer) })
      end
      solved_question_count += (result.last.result == true)
    end

    @question.users.create if solved_question_count == @testcases.length && @question.users.where(id: @user_id).nil?
    debugger

    render json: result
  end

  def topics
    render json: Question.all_constants
  end

  private

  def execute_python(tempfile, testcase, _solution)
    result = `python3 #{tempfile.path} #{testcase}`
    result == _solution
  end

  def execute_javascript(tempfile, testcase, _solution)
    result = `node #{tempfile.path} #{testcase}`
    result == _solution
  end

  def create_tempfile(_ispython)
    if _ispython
      Tempfile.new(%w[script py])
    else
      Tempfile.new(%w[script js])
    end
  end
end
