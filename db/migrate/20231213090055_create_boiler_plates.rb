class CreateBoilerPlates < ActiveRecord::Migration[7.0]
  def change
    create_table :boiler_plates do |t|
      t.string :code
      t.string :language
      t.references :question, null: false, foreign_key: true

      t.timestamps
    end
  end
end
