class User < ApplicationRecord
  has_many :solved_questions
  has_secure_password
end
