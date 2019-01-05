class Post < ApplicationRecord
  belongs_to :industry, foreign_key: 'industry_id'
  has_many :comments

end
