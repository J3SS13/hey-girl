class AddReferenceToEvents < ActiveRecord::Migration[5.2]
  def change
    add_reference :events, :industry, foreign_key: true
  end
end
