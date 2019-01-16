Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'pages#landing'
  get 'projects', to: 'pages#projects', as: :projects
  get 'about_contact', to: 'pages#about_contact', as: :about_contact
end
