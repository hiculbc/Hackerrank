class UsersController < ApplicationController
  def new; end

  def create
    @user = User.new(create_params)
    if @user.save
      render json: @user.id
    else
      render json: { error: @user.errors }, status: 422
    end
  end

  def update; end

  def edit; end

  def destroy; end

  def show
    @user = User.find(params[:id])
    render json: @user
  end

  def index; end

  private

  def create_params
    params.permit(:name, :email, :password, :password_confirmation)
  end
end
