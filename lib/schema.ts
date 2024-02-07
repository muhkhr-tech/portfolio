import { relations } from 'drizzle-orm';
import {
    boolean,
    integer,
    pgTable,
    primaryKey,
    serial,
    text,
    timestamp,
    uniqueIndex,
  } from 'drizzle-orm/pg-core';

export const User = pgTable(
    'users',
    {
      id: serial('id').primaryKey(),
      name: text('name').notNull(),
      email: text('email').notNull(),
      createdAt: timestamp('created_at').defaultNow().notNull(),
      updatedAt: timestamp('updated_at').defaultNow().notNull(),
    }
  );

  export const ItemType = pgTable(
    'item_types',
    {
      id: serial('id').primaryKey(),
      name: text('name').notNull().unique(),
      isActive: boolean('is_active').notNull(),
      createdAt: timestamp('created_at').defaultNow().notNull(),
      updatedAt: timestamp('updated_at').defaultNow().notNull(),
    }
  );

  export const ItemTypeRelations = relations(ItemType, ({ many }) => ({
    Item: many(Item),
  }));

  export const Item = pgTable(
    'items',
    {
      id: serial('id').primaryKey(),
      name: text('name').notNull().unique(),
      price: integer('price').notNull(),
      typeId: serial('type_id').notNull().references(() => ItemType.id),
      createdAt: timestamp('created_at').defaultNow().notNull(),
      updatedAt: timestamp('updated_at').defaultNow().notNull(),
    }
  );

  export const ItemtoTypeRelations = relations(Item, ({ one }) => ({
    type: one(ItemType, {
      fields: [Item.typeId],
      references: [ItemType.id],
    }),
  }));

  export const ItemRelations = relations(Item, ({ many }) => ({
    ShoppingItem: many(Shopping),
  }));

  export const Shopping = pgTable(
    'shoppings',
    {
      id: serial('id').primaryKey(),
      description: text('description').notNull().unique(),
      createdAt: timestamp('created_at').defaultNow().notNull(),
      updatedAt: timestamp('updated_at').defaultNow().notNull(),
    }
  );

  export const ShoppingRelations = relations(Shopping, ({ many }) => ({
    ShoppingItem: many(Item),
  }));

  export const ShoppingItem = pgTable('shopping_items', {
    itemId: integer('item_id').notNull().references(() => Item.id),
    shoppingId: integer('shopping_id').notNull().references(() => Shopping.id),
  }, (t) => ({
    pk: primaryKey(t.itemId, t.shoppingId),
  }),
);