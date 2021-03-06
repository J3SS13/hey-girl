class User < ApplicationRecord
  has_secure_password
    validates :email, presence: true

    def to_token_payload
        {
            sub: id,
            email: email
        }
    end

    has_many :posts
    has_many :comments
    has_and_belongs_to_many :events
end
