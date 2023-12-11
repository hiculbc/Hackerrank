class CreateTestcases < ActiveRecord::Migration[7.0]
  def change
    create_table :testcases do |t|
      t.string :testcase
      t.string :solution
      t.references :question, null: false, foreign_key: true

      t.timestamps
    end
  end
end
