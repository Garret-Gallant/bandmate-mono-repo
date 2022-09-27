class ApplicationController < ActionController::API
  include ActionController::Cookies
  before_action :authenticate_user
  rescue_from ActiveRecord::RecordNotFound, with: :record_not_found
  rescue_from ActiveRecord::RecordInvalid, with: :invalid_record

private

  # def hello_world
  #   session[:count] = (session[:count] || 0) + 1
  #   render json: { count: session[:count] }
  # end

  def authenticate_user
    @current_user ||= User.find_by_id(session[:user_id])
    render json: {errors: {User: "You don't have access"} }, status: :unauthorized unless @current_user
  end

  def authorized
    permitted = current_user.is_admin?
    render json: {errors: {User: "You don't have access"} }, status: :unauthorized
  end

  def record_not_found(err)
    render json: { error: "#{err.model} not found" }, status: :not_found
  end

  def invalid_record(err)
    render json: { errors: err.record.errors.full_messages }, status: :unprocessable_entity
  end

end
