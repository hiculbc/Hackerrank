class QuestionsController < ApplicationController
  def index
    @questions = Question.all
    render json: @questions
  end

  def topics
    render json: Question.all_constants
  end
end
