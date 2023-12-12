class SessionsController < ApplicationController
  def create
    @user = User.find_by(email: create_params[:email])
    if @user&.authenticate(create_params[:password])
      render json: @user.id, status: 200
    else
      render json: { message: 'Invalid email/password combination' }, status: 401
    end
  end

  def destroy; end

  private

  def create_params
    params.permit(:email, :password)
  end
end
