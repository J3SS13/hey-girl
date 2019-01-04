class AddReferenceToPosts < ActiveRecord::Migration[5.2]
  def change
    add_reference :posts, :industry, foreign_key: true
  end
end
