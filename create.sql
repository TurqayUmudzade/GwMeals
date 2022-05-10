CREATE TABLE Menu
(
  price FLOAT NOT NULL,
  meal_name VARCHAR(256) NOT NULL,
  is_available INT NOT NULL,
  PRIMARY KEY (meal_name)
);

CREATE TABLE Users
(
  username VARCHAR(256) NOT NULL,
  email VARCHAR(256) NOT NULL,
  phone_number VARCHAR(256) NOT NULL,
  password VARCHAR(256) NOT NULL,
  PRIMARY KEY (username)
);

CREATE TABLE Payment
(
  payment_id VARCHAR(256) NOT NULL,
  amount FLOAT NOT NULL,
  PRIMARY KEY (payment_id)
);

CREATE TABLE Address
(
  street VARCHAR(256) NOT NULL,
  address_id INT NOT NULL,
  username VARCHAR(256) NOT NULL,
  PRIMARY KEY (address_id),
  FOREIGN KEY (username) REFERENCES Users(username)
);

CREATE TABLE Order_Type
(
  order_type_id INT NOT NULL,
  name VARCHAR(256) NOT NULL,
  PRIMARY KEY (order_type_id)
);

CREATE TABLE Orders
(
  order_id INT NOT NULL,
  total_amount FLOAT NOT NULL,
  order_status VARCHAR(256) NOT NULL,
  payment_id VARCHAR(256) NOT NULL,
  address_id INT NOT NULL,
  order_type_id INT NOT NULL,
  username VARCHAR(256) NOT NULL,
  PRIMARY KEY (order_id),
  FOREIGN KEY (payment_id) REFERENCES Payment(payment_id),
  FOREIGN KEY (address_id) REFERENCES Address(address_id),
  FOREIGN KEY (order_type_id) REFERENCES Order_Type(order_type_id),
  FOREIGN KEY (username) REFERENCES Users(username)
);

CREATE TABLE MenuOrder
(
  quantity INT NOT NULL,
  meal_name VARCHAR(256) NOT NULL,
  order_id INT NOT NULL,
  FOREIGN KEY (meal_name) REFERENCES Menu(meal_name),
  FOREIGN KEY (order_id) REFERENCES Orders(order_id)
);