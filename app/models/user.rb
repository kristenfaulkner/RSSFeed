class User < ActiveRecord::Base
  attr_reader :password
  
    validates :email, presence: true, uniqueness: true
    validates :password_digest, presence: true
    validates :password, length: {minimum: 6, :allow_nil => true}
  
    has_many :feeds
  
    def reset_session_token
      self.session_token = SecureRandom.urlsafe_base64(16)
      self.save
      self.session_token
    end
  
    def password=(password)
      if password
        @password = password
        self.password_digest = BCrypt::Password.create(password)
      end
    end
  
    def is_password?(password)
      BCrypt::Password.new(self.password_digest).is_password?(password)
    end
  
    def self.find_by_credentials(email, secret_password)
      @user = User.find_by_email(email)
      if @user && @user.is_password?(secret_password)
        return @user
      else
        return nil
      end
    end

  end