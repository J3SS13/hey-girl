class Post < ApplicationRecord
  belongs_to :industry, foreign_key: 'industry_id'
  belongs_to :user
  has_many :comments

end
