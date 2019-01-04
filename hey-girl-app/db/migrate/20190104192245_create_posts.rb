class CreatePosts < ActiveRecord::Migration[5.2]
  def change
    create_table :posts do |t|
      t.string :topic
      t.date :date
      t.string :user_name

      t.timestamps
    end
  end
end
