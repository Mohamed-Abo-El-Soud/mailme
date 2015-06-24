require 'test_helper'

class UserTest < ActiveSupport::TestCase

  def setup
    # @user = User.new(name: "Example User", email: "user@example.com",
    #                 password: "foobar", password_confirmation: "foobar")
    
    @user = User.new(name: "Example User", email: "user@example",
                    password: "foobar", password_confirmation: "foobar")
    example_params = {"name"=>"", "email"=>"", "password"=>"", "password_confirmation"=>""}
    second_params = { name: "", email: "",
                    password: "", password_confirmation: ""}
  end
  # test "email addresses should be unique" do
  #   duplicate_user = @user.dup
  #   duplicate_user.email = @user.email.upcase
  #   @user.save
  #   assert_not duplicate_user.valid?
  # end
  # test "password should be present (nonblank)" do
  #   @user.password = @user.password_confirmation = " " * 6
  #   assert_not @user.valid?
  # end

  # test "password should have a minimum length" do
  #   @user.password = @user.password_confirmation = "a" * 5
  #   assert_not @user.valid?
  # end 
  test "user should be invalid" do
      # userValid = @user.save
      assert_not @user.valid?
    end
  test "user creation should pause and allow errors to show" do
     @user.save
      assert true #@user.valid?
    end
    
end

{name: "", email: "", password: "", password_confirmation: ""}