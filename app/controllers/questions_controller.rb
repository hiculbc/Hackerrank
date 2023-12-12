class QuestionsController < ApplicationController
  def show; end

  def index
    @questions = Question.all
    render json: @questions
  end
end
