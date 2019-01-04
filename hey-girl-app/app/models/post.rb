class Post < ApplicationRecord
  belongs_to :industries, foreign_key: 'industry_id'
  has_many :comments

end
