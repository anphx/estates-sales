class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  validates_uniqueness_of :email, case_sensitive: false
  validates :auth_token, uniqueness: true

  before_create :generate_authentication_token!

  has_many :products, dependent: :destroy
  has_many :orders, dependent: :destroy

  USER_ROLES = {
    (ADMIN = 1) => 'Admin',
    (AGENT = 2) => 'Agent',
    (CUSTOMER = 3) => 'Customer'
  }

  def generate_authentication_token!
    new_token = ''
    begin
      new_token = Devise.friendly_token
    end while (new_token.blank? || self.class.exists?(auth_token: new_token))
    self.auth_token = new_token
  end
end
