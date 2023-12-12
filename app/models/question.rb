class Question < ApplicationRecord
  ARRAY = 0
  STRING = 1
  HASHING = 2
  GREEDY = 3

  def self.all_constants
    %w[ARRAY STRING HASHING GREEDY]
  end
end
