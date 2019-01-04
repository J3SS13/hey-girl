class Comment < ApplicationRecord
  belongs_to :posts, foreign_key: 'post_id' optional: true
end
