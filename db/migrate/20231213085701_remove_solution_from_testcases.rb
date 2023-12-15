class RemoveSolutionFromTestcases < ActiveRecord::Migration[7.0]
  def change
    remove_column :testcases, :solution, :string
  end
end
