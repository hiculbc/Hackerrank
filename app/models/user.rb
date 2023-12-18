class User < ApplicationRecord
  has_many :questions, class_name: 'SolvedQuestion'
  has_many :solved_questions, through: :questions, source: :question, dependent: :destroy
  has_secure_password
  before_save :downcase_email
  validates :name, presence: true, length: { maximum: 50 }
  VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i
  validates :email, presence: true, length: { maximum: 255 },
                    format: { with: VALID_EMAIL_REGEX }, uniqueness: true
  validates :password, length: { minimum: 6 }, presence: true, allow_nil: true

  private

  def downcase_email
    email.downcase!
  end
end
