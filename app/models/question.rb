class Question < ApplicationRecord
  has_many :solutions
  has_many :testcases
  has_many :boiler_plates
  has_many :users

  ARRAY = 0
  STRING = 1
  HASHING = 2
  BINARY_SEARCH = 3

  def self.all_constants
    %w[ARRAY STRING HASHING GREEDY]
  end

  def show
    render json: Question.find(params[:id])
  end
end
