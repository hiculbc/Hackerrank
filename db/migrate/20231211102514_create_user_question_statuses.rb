class CreateUserQuestionStatuses < ActiveRecord::Migration[7.0]
  def change
    create_table :user_question_statuses do |t|
      t.integer :solved
      t.references :user, null: false, foreign_key: true
      t.references :question, null: false, foreign_key: true

      t.timestamps
    end
  end
end
