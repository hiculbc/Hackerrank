class Testcase < ApplicationRecord
  belongs_to :question
  has_one :solution
end
