class SessionsController < ApplicationController
  
  def new
    user = User.new
    render: :json => user
  end
  
  def create
    user = User.find_by_credentials(
      params[:user][:email],
      params[:user][:password]
    )
    if user
      login(user)
      render :json => user
    else
      flash.now[:errors] = ["Invalid Username or Password"]
      render :json user.errors.full_messages
    end
  end
  
  def destroy
    logout
  end
  
  def user_params
    params.require(:user).permit(:email, :password)
    
  end
end