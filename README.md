
### Analytics:

analytics_view: Displays user's financial analytics.

fetch_sticky_notes: Retrieves all sticky notes as JSON.

create_or_add_to_board: Creates or modifies a board.

fetch_board_sticky_notes: Fetches sticky notes for a specific board.

delete_sticky_note_from_board: Removes a sticky note from a board.

save_board: Stores the current state of a board.

fetch_user_boards: Retrieves boards for a specific user.

savings_opportunities: Identifies saving opportunities and association rules for a specific expense category.

create_financial_health: Calculates a financial health score based on various factors and provides personalized tips for improvement.

  

###  Budgets:

budget_overview: Shows a user's budget overview.

delete_budget: Erases a specific budget category.

CategoryBudgetViewSet: CRUD operations +

alerts: Generates a list of categories where the user's spending has exceeded their established budget limits. Also create PushNotification

  

###  Transactions:

add_transaction: Creates a new transaction.

delete_transaction: Erases a specific transaction.

categories_view: Retrieves all categories as JSON.

manage_categories: Manages categories, including form submissions and creating new ones.

delete_category: Erases a specific category.

transaction_list: Displays a list of transactions.

transaction_detail: Shows specific transaction details.

forecast_expenses: Estimates a user's monthly expenses based on average daily spend.

CategoryViewSet: CRUD operations +

compare_spending: Calculates and compares the spending of a user and their friends within a specified category over a given period.

TransactionViewSet: CRUD operations +

recommendations: Suggests transactions to the user based on their most frequently used category.

assign_category: Uses keywords in a transaction's description and name to categorize the transaction automatically.

apply_recurring_transactions: create transactions planed by RecurringTransaction.

  

###  Users:

signup: Manages user registration.

user_login: Handles user sign-in.

user_logout: Manages user sign-out.

dashboard: Displays user dashboard.

UserViewSet: CRUD operations for users and user profiles, social media accounts, and friend requests.

  

###  Capital:

SavingGoalViewSet: manages user-specific saving goals, supports adding/removing users and categories, ensuring creator's modification rights.

  

###  Database Models:

Analytics App: Manages analytics with StickyNoteContent, StickyNote, Board, and BoardStickyNote models.

Capital App: Enables collaborative saving goals tracking using the versatile SavingGoal model.

Budgets App: Uses CategoryBudget model for budget management. Multiple users can share budget.

Transactions App: Handles transactions with Category and Transaction models, RecurringTransaction.

Users App: Manages user profiles and social media integration with User, UserProfile, SocialMediaAccount, PushNotification, FriendRequest.