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

  def solved
    @user = User.find(params[:user_id])
    if params[:only_ids]
      render json: @user.solved_questions.pluck(:id)
    else
      render json: @user.solved_questions
    end
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
    if params[:isTest]
      if @isPython
        output = execute_python(@tempfile, @testcases.first.testcase, @testcases.first.solution.answer, true)
        render json: {
          testcase: @testcases.first,
          result: output
        }
      else
        output = execute_javascript(@tempfile, @testcases.first.testcase, @testcases.first.solution.answer, true)
        render json: {
          testcase: @testcases.first,
          result: output
        }
      end
    else
      result = []
      solved_question_count = 0
      @testcases.map do |each_testcase|
        if @isPython
          result.append({ testcase: each_testcase,
                          result: execute_python(@tempfile, each_testcase.testcase, each_testcase.solution.answer,
                                                 false) })
        else
          result.append({ testcase: each_testcase,
                          result: execute_javascript(@tempfile, each_testcase.testcase,
                                                     each_testcase.solution.answer, false) })
        end
        solved_question_count += (result.last[:result] == true ? 1 : 0)
      end

      if solved_question_count == @testcases.length && @question.solved_users.where(id: @user_id).empty?
        @question.users.create(user_id: @user_id)
      end

      render json: result
    end
  end

  def topics
    render json: Question.all_constants
  end

  private

  def execute_python(tempfile, testcase, _solution, _isTest)
    output_file = create_tempfile(true)
    `python3 #{tempfile.path} #{testcase} > #{output_file.path} 2>&1`
    output_file.rewind
    result = output_file.read
    return result if _isTest

    result == _solution
  end

  def execute_javascript(tempfile, testcase, _solution, _isTest)
    output_file = create_tempfile(true)
    `node #{tempfile.path} #{testcase} > #{output_file.path} 2>&1`
    output_file.rewind
    result = output_file.read
    return result if _isTest

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
