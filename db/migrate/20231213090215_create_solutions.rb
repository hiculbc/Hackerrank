class CreateSolutions < ActiveRecord::Migration[7.0]
  def change
    create_table :solutions do |t|
      t.string :answer
      t.references :question, null: false, foreign_key: true
      t.references :testcases, null: false, foreign_key: true

      t.timestamps
    end

    rename_column :testcases, :test
  end
end
