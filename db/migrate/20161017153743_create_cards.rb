class CreateCards < ActiveRecord::Migration[5.0]
  def change
    create_table :cards do |t|
      t.text :question
      t.text :answer

      t.timestamps
    end
  end
end
