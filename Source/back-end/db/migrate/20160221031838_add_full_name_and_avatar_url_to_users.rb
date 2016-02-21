class AddFullNameAndAvatarUrlToUsers < ActiveRecord::Migration
  def change
    add_column :users, :full_name, :string, default: ""
    add_column :users, :avatar_url, :string, default: ""
  end
end
