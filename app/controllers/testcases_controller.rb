class TestcasesController < ApplicationController
  def index
    @question = Question.find(params[:question_id])
    render json: @question.testcases
  end

  def show; end
end
