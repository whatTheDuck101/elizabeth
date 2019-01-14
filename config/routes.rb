Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'pages#landing'
  get 'projects',           to: 'pages#projects',      as: :projects
  get 'about_me',           to: 'pages#about_me',      as: :about
  get 'contact',         to: 'pages#contact',    as: :contact

end
