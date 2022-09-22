class ApplicationController < ActionController::API
  include ActionController::Cookies
  before_action :authenticate_user

  def hello_world
    session[:count] = (session[:count] || 0) + 1
    render json: { count: session[:count] }
  end

  def current_user
    @current_user ||= User.find_by_id(session[:user_id])
  end

  def authenticate_user
    render json: {errors: {User: "You don't have access"} }, status: :unauthorized unless current_user
  end

  def authorized
    permitted = current_user.admin?
    render json: {errors: {User: "You don't have access"} }, status: :unauthorized
  end
end
