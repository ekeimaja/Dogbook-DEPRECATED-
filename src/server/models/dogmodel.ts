import {Table, Column, Model, CreatedAt, UpdatedAt} from 'sequelize-typescript';
@Table
export class Dog extends Model<Dog> {
@Column
 name: string;
@Column
 breed: string;
@CreatedAt
 @Column
 createdAt: Date;
@UpdatedAt
 @Column
 updatedAt: Date;
}
