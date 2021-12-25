export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  bigint: any;
  category: any;
  json: any;
  numeric: any;
  timestamptz: any;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']>;
  _gt?: InputMaybe<Scalars['Int']>;
  _gte?: InputMaybe<Scalars['Int']>;
  _in?: InputMaybe<Array<Scalars['Int']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Int']>;
  _lte?: InputMaybe<Scalars['Int']>;
  _neq?: InputMaybe<Scalars['Int']>;
  _nin?: InputMaybe<Array<Scalars['Int']>>;
};

export type StakeCampaignArgs = {
  amount: Scalars['numeric'];
  campaign_id: Scalars['bigint'];
  text: Scalars['String'];
  tx: Scalars['json'];
};

export type StakeCampaignOutput = {
  __typename?: 'StakeCampaignOutput';
  id: Scalars['Int'];
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

/** Boolean expression to compare columns of type "bigint". All fields are combined with logical 'AND'. */
export type Bigint_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['bigint']>;
  _gt?: InputMaybe<Scalars['bigint']>;
  _gte?: InputMaybe<Scalars['bigint']>;
  _in?: InputMaybe<Array<Scalars['bigint']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['bigint']>;
  _lte?: InputMaybe<Scalars['bigint']>;
  _neq?: InputMaybe<Scalars['bigint']>;
  _nin?: InputMaybe<Array<Scalars['bigint']>>;
};

/** columns and relationships of "campaign" */
export type Campaign = {
  __typename?: 'campaign';
  amount: Scalars['numeric'];
  category?: Maybe<Scalars['category']>;
  created_at: Scalars['timestamptz'];
  description: Scalars['String'];
  id: Scalars['bigint'];
  location?: Maybe<Scalars['String']>;
  media: Scalars['json'];
  owner: Scalars['String'];
  /** An array relationship */
  stakes: Array<Stake>;
  /** An aggregate relationship */
  stakes_aggregate: Stake_Aggregate;
  title: Scalars['String'];
};


/** columns and relationships of "campaign" */
export type CampaignMediaArgs = {
  path?: InputMaybe<Scalars['String']>;
};


/** columns and relationships of "campaign" */
export type CampaignStakesArgs = {
  distinct_on?: InputMaybe<Array<Stake_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Stake_Order_By>>;
  where?: InputMaybe<Stake_Bool_Exp>;
};


/** columns and relationships of "campaign" */
export type CampaignStakes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Stake_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Stake_Order_By>>;
  where?: InputMaybe<Stake_Bool_Exp>;
};

/** aggregated selection of "campaign" */
export type Campaign_Aggregate = {
  __typename?: 'campaign_aggregate';
  aggregate?: Maybe<Campaign_Aggregate_Fields>;
  nodes: Array<Campaign>;
};

/** aggregate fields of "campaign" */
export type Campaign_Aggregate_Fields = {
  __typename?: 'campaign_aggregate_fields';
  avg?: Maybe<Campaign_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Campaign_Max_Fields>;
  min?: Maybe<Campaign_Min_Fields>;
  stddev?: Maybe<Campaign_Stddev_Fields>;
  stddev_pop?: Maybe<Campaign_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Campaign_Stddev_Samp_Fields>;
  sum?: Maybe<Campaign_Sum_Fields>;
  var_pop?: Maybe<Campaign_Var_Pop_Fields>;
  var_samp?: Maybe<Campaign_Var_Samp_Fields>;
  variance?: Maybe<Campaign_Variance_Fields>;
};


/** aggregate fields of "campaign" */
export type Campaign_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Campaign_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Campaign_Avg_Fields = {
  __typename?: 'campaign_avg_fields';
  amount?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "campaign". All fields are combined with a logical 'AND'. */
export type Campaign_Bool_Exp = {
  _and?: InputMaybe<Array<Campaign_Bool_Exp>>;
  _not?: InputMaybe<Campaign_Bool_Exp>;
  _or?: InputMaybe<Array<Campaign_Bool_Exp>>;
  amount?: InputMaybe<Numeric_Comparison_Exp>;
  category?: InputMaybe<Category_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  location?: InputMaybe<String_Comparison_Exp>;
  media?: InputMaybe<Json_Comparison_Exp>;
  owner?: InputMaybe<String_Comparison_Exp>;
  stakes?: InputMaybe<Stake_Bool_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "campaign" */
export enum Campaign_Constraint {
  /** unique or primary key constraint */
  CampaignPkey = 'campaign_pkey'
}

/** input type for incrementing numeric columns in table "campaign" */
export type Campaign_Inc_Input = {
  amount?: InputMaybe<Scalars['numeric']>;
  id?: InputMaybe<Scalars['bigint']>;
};

/** input type for inserting data into table "campaign" */
export type Campaign_Insert_Input = {
  amount?: InputMaybe<Scalars['numeric']>;
  category?: InputMaybe<Scalars['category']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['bigint']>;
  location?: InputMaybe<Scalars['String']>;
  media?: InputMaybe<Scalars['json']>;
  owner?: InputMaybe<Scalars['String']>;
  stakes?: InputMaybe<Stake_Arr_Rel_Insert_Input>;
  title?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Campaign_Max_Fields = {
  __typename?: 'campaign_max_fields';
  amount?: Maybe<Scalars['numeric']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['bigint']>;
  location?: Maybe<Scalars['String']>;
  owner?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Campaign_Min_Fields = {
  __typename?: 'campaign_min_fields';
  amount?: Maybe<Scalars['numeric']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['bigint']>;
  location?: Maybe<Scalars['String']>;
  owner?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "campaign" */
export type Campaign_Mutation_Response = {
  __typename?: 'campaign_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Campaign>;
};

/** input type for inserting object relation for remote table "campaign" */
export type Campaign_Obj_Rel_Insert_Input = {
  data: Campaign_Insert_Input;
  /** on conflict condition */
  on_conflict?: InputMaybe<Campaign_On_Conflict>;
};

/** on conflict condition type for table "campaign" */
export type Campaign_On_Conflict = {
  constraint: Campaign_Constraint;
  update_columns?: Array<Campaign_Update_Column>;
  where?: InputMaybe<Campaign_Bool_Exp>;
};

/** Ordering options when selecting data from "campaign". */
export type Campaign_Order_By = {
  amount?: InputMaybe<Order_By>;
  category?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  location?: InputMaybe<Order_By>;
  media?: InputMaybe<Order_By>;
  owner?: InputMaybe<Order_By>;
  stakes_aggregate?: InputMaybe<Stake_Aggregate_Order_By>;
  title?: InputMaybe<Order_By>;
};

/** primary key columns input for table: campaign */
export type Campaign_Pk_Columns_Input = {
  id: Scalars['bigint'];
};

/** select columns of table "campaign" */
export enum Campaign_Select_Column {
  /** column name */
  Amount = 'amount',
  /** column name */
  Category = 'category',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Location = 'location',
  /** column name */
  Media = 'media',
  /** column name */
  Owner = 'owner',
  /** column name */
  Title = 'title'
}

/** input type for updating data in table "campaign" */
export type Campaign_Set_Input = {
  amount?: InputMaybe<Scalars['numeric']>;
  category?: InputMaybe<Scalars['category']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['bigint']>;
  location?: InputMaybe<Scalars['String']>;
  media?: InputMaybe<Scalars['json']>;
  owner?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Campaign_Stddev_Fields = {
  __typename?: 'campaign_stddev_fields';
  amount?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Campaign_Stddev_Pop_Fields = {
  __typename?: 'campaign_stddev_pop_fields';
  amount?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Campaign_Stddev_Samp_Fields = {
  __typename?: 'campaign_stddev_samp_fields';
  amount?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Campaign_Sum_Fields = {
  __typename?: 'campaign_sum_fields';
  amount?: Maybe<Scalars['numeric']>;
  id?: Maybe<Scalars['bigint']>;
};

/** update columns of table "campaign" */
export enum Campaign_Update_Column {
  /** column name */
  Amount = 'amount',
  /** column name */
  Category = 'category',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Location = 'location',
  /** column name */
  Media = 'media',
  /** column name */
  Owner = 'owner',
  /** column name */
  Title = 'title'
}

/** aggregate var_pop on columns */
export type Campaign_Var_Pop_Fields = {
  __typename?: 'campaign_var_pop_fields';
  amount?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Campaign_Var_Samp_Fields = {
  __typename?: 'campaign_var_samp_fields';
  amount?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Campaign_Variance_Fields = {
  __typename?: 'campaign_variance_fields';
  amount?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to compare columns of type "category". All fields are combined with logical 'AND'. */
export type Category_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['category']>;
  _gt?: InputMaybe<Scalars['category']>;
  _gte?: InputMaybe<Scalars['category']>;
  _in?: InputMaybe<Array<Scalars['category']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['category']>;
  _lte?: InputMaybe<Scalars['category']>;
  _neq?: InputMaybe<Scalars['category']>;
  _nin?: InputMaybe<Array<Scalars['category']>>;
};

/** columns and relationships of "comment" */
export type Comment = {
  __typename?: 'comment';
  created_at: Scalars['timestamptz'];
  id: Scalars['bigint'];
  /** An object relationship */
  stake: Stake;
  stake_id: Scalars['bigint'];
  text: Scalars['String'];
};

/** aggregated selection of "comment" */
export type Comment_Aggregate = {
  __typename?: 'comment_aggregate';
  aggregate?: Maybe<Comment_Aggregate_Fields>;
  nodes: Array<Comment>;
};

/** aggregate fields of "comment" */
export type Comment_Aggregate_Fields = {
  __typename?: 'comment_aggregate_fields';
  avg?: Maybe<Comment_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Comment_Max_Fields>;
  min?: Maybe<Comment_Min_Fields>;
  stddev?: Maybe<Comment_Stddev_Fields>;
  stddev_pop?: Maybe<Comment_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Comment_Stddev_Samp_Fields>;
  sum?: Maybe<Comment_Sum_Fields>;
  var_pop?: Maybe<Comment_Var_Pop_Fields>;
  var_samp?: Maybe<Comment_Var_Samp_Fields>;
  variance?: Maybe<Comment_Variance_Fields>;
};


/** aggregate fields of "comment" */
export type Comment_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Comment_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Comment_Avg_Fields = {
  __typename?: 'comment_avg_fields';
  id?: Maybe<Scalars['Float']>;
  stake_id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "comment". All fields are combined with a logical 'AND'. */
export type Comment_Bool_Exp = {
  _and?: InputMaybe<Array<Comment_Bool_Exp>>;
  _not?: InputMaybe<Comment_Bool_Exp>;
  _or?: InputMaybe<Array<Comment_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  stake?: InputMaybe<Stake_Bool_Exp>;
  stake_id?: InputMaybe<Bigint_Comparison_Exp>;
  text?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "comment" */
export enum Comment_Constraint {
  /** unique or primary key constraint */
  CommentPkey = 'comment_pkey'
}

/** input type for incrementing numeric columns in table "comment" */
export type Comment_Inc_Input = {
  id?: InputMaybe<Scalars['bigint']>;
  stake_id?: InputMaybe<Scalars['bigint']>;
};

/** input type for inserting data into table "comment" */
export type Comment_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['bigint']>;
  stake?: InputMaybe<Stake_Obj_Rel_Insert_Input>;
  stake_id?: InputMaybe<Scalars['bigint']>;
  text?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Comment_Max_Fields = {
  __typename?: 'comment_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['bigint']>;
  stake_id?: Maybe<Scalars['bigint']>;
  text?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Comment_Min_Fields = {
  __typename?: 'comment_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['bigint']>;
  stake_id?: Maybe<Scalars['bigint']>;
  text?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "comment" */
export type Comment_Mutation_Response = {
  __typename?: 'comment_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Comment>;
};

/** input type for inserting object relation for remote table "comment" */
export type Comment_Obj_Rel_Insert_Input = {
  data: Comment_Insert_Input;
  /** on conflict condition */
  on_conflict?: InputMaybe<Comment_On_Conflict>;
};

/** on conflict condition type for table "comment" */
export type Comment_On_Conflict = {
  constraint: Comment_Constraint;
  update_columns?: Array<Comment_Update_Column>;
  where?: InputMaybe<Comment_Bool_Exp>;
};

/** Ordering options when selecting data from "comment". */
export type Comment_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  stake?: InputMaybe<Stake_Order_By>;
  stake_id?: InputMaybe<Order_By>;
  text?: InputMaybe<Order_By>;
};

/** primary key columns input for table: comment */
export type Comment_Pk_Columns_Input = {
  id: Scalars['bigint'];
};

/** select columns of table "comment" */
export enum Comment_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  StakeId = 'stake_id',
  /** column name */
  Text = 'text'
}

/** input type for updating data in table "comment" */
export type Comment_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['bigint']>;
  stake_id?: InputMaybe<Scalars['bigint']>;
  text?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Comment_Stddev_Fields = {
  __typename?: 'comment_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  stake_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Comment_Stddev_Pop_Fields = {
  __typename?: 'comment_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  stake_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Comment_Stddev_Samp_Fields = {
  __typename?: 'comment_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  stake_id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Comment_Sum_Fields = {
  __typename?: 'comment_sum_fields';
  id?: Maybe<Scalars['bigint']>;
  stake_id?: Maybe<Scalars['bigint']>;
};

/** update columns of table "comment" */
export enum Comment_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  StakeId = 'stake_id',
  /** column name */
  Text = 'text'
}

/** aggregate var_pop on columns */
export type Comment_Var_Pop_Fields = {
  __typename?: 'comment_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  stake_id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Comment_Var_Samp_Fields = {
  __typename?: 'comment_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  stake_id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Comment_Variance_Fields = {
  __typename?: 'comment_variance_fields';
  id?: Maybe<Scalars['Float']>;
  stake_id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to compare columns of type "json". All fields are combined with logical 'AND'. */
export type Json_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['json']>;
  _gt?: InputMaybe<Scalars['json']>;
  _gte?: InputMaybe<Scalars['json']>;
  _in?: InputMaybe<Array<Scalars['json']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['json']>;
  _lte?: InputMaybe<Scalars['json']>;
  _neq?: InputMaybe<Scalars['json']>;
  _nin?: InputMaybe<Array<Scalars['json']>>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "campaign" */
  delete_campaign?: Maybe<Campaign_Mutation_Response>;
  /** delete single row from the table: "campaign" */
  delete_campaign_by_pk?: Maybe<Campaign>;
  /** delete data from the table: "comment" */
  delete_comment?: Maybe<Comment_Mutation_Response>;
  /** delete single row from the table: "comment" */
  delete_comment_by_pk?: Maybe<Comment>;
  /** delete data from the table: "stake" */
  delete_stake?: Maybe<Stake_Mutation_Response>;
  /** delete single row from the table: "stake" */
  delete_stake_by_pk?: Maybe<Stake>;
  /** insert data into the table: "campaign" */
  insert_campaign?: Maybe<Campaign_Mutation_Response>;
  /** insert a single row into the table: "campaign" */
  insert_campaign_one?: Maybe<Campaign>;
  /** insert data into the table: "comment" */
  insert_comment?: Maybe<Comment_Mutation_Response>;
  /** insert a single row into the table: "comment" */
  insert_comment_one?: Maybe<Comment>;
  /** insert data into the table: "stake" */
  insert_stake?: Maybe<Stake_Mutation_Response>;
  /** insert a single row into the table: "stake" */
  insert_stake_one?: Maybe<Stake>;
  stake_campaign?: Maybe<StakeCampaignOutput>;
  /** update data of the table: "campaign" */
  update_campaign?: Maybe<Campaign_Mutation_Response>;
  /** update single row of the table: "campaign" */
  update_campaign_by_pk?: Maybe<Campaign>;
  /** update data of the table: "comment" */
  update_comment?: Maybe<Comment_Mutation_Response>;
  /** update single row of the table: "comment" */
  update_comment_by_pk?: Maybe<Comment>;
  /** update data of the table: "stake" */
  update_stake?: Maybe<Stake_Mutation_Response>;
  /** update single row of the table: "stake" */
  update_stake_by_pk?: Maybe<Stake>;
};


/** mutation root */
export type Mutation_RootDelete_CampaignArgs = {
  where: Campaign_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Campaign_By_PkArgs = {
  id: Scalars['bigint'];
};


/** mutation root */
export type Mutation_RootDelete_CommentArgs = {
  where: Comment_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Comment_By_PkArgs = {
  id: Scalars['bigint'];
};


/** mutation root */
export type Mutation_RootDelete_StakeArgs = {
  where: Stake_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Stake_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootInsert_CampaignArgs = {
  objects: Array<Campaign_Insert_Input>;
  on_conflict?: InputMaybe<Campaign_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Campaign_OneArgs = {
  object: Campaign_Insert_Input;
  on_conflict?: InputMaybe<Campaign_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_CommentArgs = {
  objects: Array<Comment_Insert_Input>;
  on_conflict?: InputMaybe<Comment_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Comment_OneArgs = {
  object: Comment_Insert_Input;
  on_conflict?: InputMaybe<Comment_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_StakeArgs = {
  objects: Array<Stake_Insert_Input>;
  on_conflict?: InputMaybe<Stake_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Stake_OneArgs = {
  object: Stake_Insert_Input;
  on_conflict?: InputMaybe<Stake_On_Conflict>;
};


/** mutation root */
export type Mutation_RootStake_CampaignArgs = {
  object: StakeCampaignArgs;
};


/** mutation root */
export type Mutation_RootUpdate_CampaignArgs = {
  _inc?: InputMaybe<Campaign_Inc_Input>;
  _set?: InputMaybe<Campaign_Set_Input>;
  where: Campaign_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Campaign_By_PkArgs = {
  _inc?: InputMaybe<Campaign_Inc_Input>;
  _set?: InputMaybe<Campaign_Set_Input>;
  pk_columns: Campaign_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_CommentArgs = {
  _inc?: InputMaybe<Comment_Inc_Input>;
  _set?: InputMaybe<Comment_Set_Input>;
  where: Comment_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Comment_By_PkArgs = {
  _inc?: InputMaybe<Comment_Inc_Input>;
  _set?: InputMaybe<Comment_Set_Input>;
  pk_columns: Comment_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_StakeArgs = {
  _inc?: InputMaybe<Stake_Inc_Input>;
  _set?: InputMaybe<Stake_Set_Input>;
  where: Stake_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Stake_By_PkArgs = {
  _inc?: InputMaybe<Stake_Inc_Input>;
  _set?: InputMaybe<Stake_Set_Input>;
  pk_columns: Stake_Pk_Columns_Input;
};

/** Boolean expression to compare columns of type "numeric". All fields are combined with logical 'AND'. */
export type Numeric_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['numeric']>;
  _gt?: InputMaybe<Scalars['numeric']>;
  _gte?: InputMaybe<Scalars['numeric']>;
  _in?: InputMaybe<Array<Scalars['numeric']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['numeric']>;
  _lte?: InputMaybe<Scalars['numeric']>;
  _neq?: InputMaybe<Scalars['numeric']>;
  _nin?: InputMaybe<Array<Scalars['numeric']>>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "campaign" */
  campaign: Array<Campaign>;
  /** fetch aggregated fields from the table: "campaign" */
  campaign_aggregate: Campaign_Aggregate;
  /** fetch data from the table: "campaign" using primary key columns */
  campaign_by_pk?: Maybe<Campaign>;
  /** fetch data from the table: "comment" */
  comment: Array<Comment>;
  /** fetch aggregated fields from the table: "comment" */
  comment_aggregate: Comment_Aggregate;
  /** fetch data from the table: "comment" using primary key columns */
  comment_by_pk?: Maybe<Comment>;
  /** fetch data from the table: "stake" */
  stake: Array<Stake>;
  /** fetch aggregated fields from the table: "stake" */
  stake_aggregate: Stake_Aggregate;
  /** fetch data from the table: "stake" using primary key columns */
  stake_by_pk?: Maybe<Stake>;
};


export type Query_RootCampaignArgs = {
  distinct_on?: InputMaybe<Array<Campaign_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Campaign_Order_By>>;
  where?: InputMaybe<Campaign_Bool_Exp>;
};


export type Query_RootCampaign_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Campaign_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Campaign_Order_By>>;
  where?: InputMaybe<Campaign_Bool_Exp>;
};


export type Query_RootCampaign_By_PkArgs = {
  id: Scalars['bigint'];
};


export type Query_RootCommentArgs = {
  distinct_on?: InputMaybe<Array<Comment_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Comment_Order_By>>;
  where?: InputMaybe<Comment_Bool_Exp>;
};


export type Query_RootComment_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Comment_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Comment_Order_By>>;
  where?: InputMaybe<Comment_Bool_Exp>;
};


export type Query_RootComment_By_PkArgs = {
  id: Scalars['bigint'];
};


export type Query_RootStakeArgs = {
  distinct_on?: InputMaybe<Array<Stake_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Stake_Order_By>>;
  where?: InputMaybe<Stake_Bool_Exp>;
};


export type Query_RootStake_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Stake_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Stake_Order_By>>;
  where?: InputMaybe<Stake_Bool_Exp>;
};


export type Query_RootStake_By_PkArgs = {
  id: Scalars['Int'];
};

/** columns and relationships of "stake" */
export type Stake = {
  __typename?: 'stake';
  amount: Scalars['numeric'];
  /** An object relationship */
  campaign: Campaign;
  campaign_id: Scalars['bigint'];
  /** An object relationship */
  comment?: Maybe<Comment>;
  comment_id?: Maybe<Scalars['bigint']>;
  created_at: Scalars['timestamptz'];
  id: Scalars['Int'];
  owner: Scalars['String'];
  tx_number: Scalars['String'];
};

/** aggregated selection of "stake" */
export type Stake_Aggregate = {
  __typename?: 'stake_aggregate';
  aggregate?: Maybe<Stake_Aggregate_Fields>;
  nodes: Array<Stake>;
};

/** aggregate fields of "stake" */
export type Stake_Aggregate_Fields = {
  __typename?: 'stake_aggregate_fields';
  avg?: Maybe<Stake_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Stake_Max_Fields>;
  min?: Maybe<Stake_Min_Fields>;
  stddev?: Maybe<Stake_Stddev_Fields>;
  stddev_pop?: Maybe<Stake_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Stake_Stddev_Samp_Fields>;
  sum?: Maybe<Stake_Sum_Fields>;
  var_pop?: Maybe<Stake_Var_Pop_Fields>;
  var_samp?: Maybe<Stake_Var_Samp_Fields>;
  variance?: Maybe<Stake_Variance_Fields>;
};


/** aggregate fields of "stake" */
export type Stake_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Stake_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "stake" */
export type Stake_Aggregate_Order_By = {
  avg?: InputMaybe<Stake_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Stake_Max_Order_By>;
  min?: InputMaybe<Stake_Min_Order_By>;
  stddev?: InputMaybe<Stake_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Stake_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Stake_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Stake_Sum_Order_By>;
  var_pop?: InputMaybe<Stake_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Stake_Var_Samp_Order_By>;
  variance?: InputMaybe<Stake_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "stake" */
export type Stake_Arr_Rel_Insert_Input = {
  data: Array<Stake_Insert_Input>;
  /** on conflict condition */
  on_conflict?: InputMaybe<Stake_On_Conflict>;
};

/** aggregate avg on columns */
export type Stake_Avg_Fields = {
  __typename?: 'stake_avg_fields';
  amount?: Maybe<Scalars['Float']>;
  campaign_id?: Maybe<Scalars['Float']>;
  comment_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "stake" */
export type Stake_Avg_Order_By = {
  amount?: InputMaybe<Order_By>;
  campaign_id?: InputMaybe<Order_By>;
  comment_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "stake". All fields are combined with a logical 'AND'. */
export type Stake_Bool_Exp = {
  _and?: InputMaybe<Array<Stake_Bool_Exp>>;
  _not?: InputMaybe<Stake_Bool_Exp>;
  _or?: InputMaybe<Array<Stake_Bool_Exp>>;
  amount?: InputMaybe<Numeric_Comparison_Exp>;
  campaign?: InputMaybe<Campaign_Bool_Exp>;
  campaign_id?: InputMaybe<Bigint_Comparison_Exp>;
  comment?: InputMaybe<Comment_Bool_Exp>;
  comment_id?: InputMaybe<Bigint_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  owner?: InputMaybe<String_Comparison_Exp>;
  tx_number?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "stake" */
export enum Stake_Constraint {
  /** unique or primary key constraint */
  StakePkey = 'stake_pkey'
}

/** input type for incrementing numeric columns in table "stake" */
export type Stake_Inc_Input = {
  amount?: InputMaybe<Scalars['numeric']>;
  campaign_id?: InputMaybe<Scalars['bigint']>;
  comment_id?: InputMaybe<Scalars['bigint']>;
  id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "stake" */
export type Stake_Insert_Input = {
  amount?: InputMaybe<Scalars['numeric']>;
  campaign?: InputMaybe<Campaign_Obj_Rel_Insert_Input>;
  campaign_id?: InputMaybe<Scalars['bigint']>;
  comment?: InputMaybe<Comment_Obj_Rel_Insert_Input>;
  comment_id?: InputMaybe<Scalars['bigint']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['Int']>;
  owner?: InputMaybe<Scalars['String']>;
  tx_number?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Stake_Max_Fields = {
  __typename?: 'stake_max_fields';
  amount?: Maybe<Scalars['numeric']>;
  campaign_id?: Maybe<Scalars['bigint']>;
  comment_id?: Maybe<Scalars['bigint']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  owner?: Maybe<Scalars['String']>;
  tx_number?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "stake" */
export type Stake_Max_Order_By = {
  amount?: InputMaybe<Order_By>;
  campaign_id?: InputMaybe<Order_By>;
  comment_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  owner?: InputMaybe<Order_By>;
  tx_number?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Stake_Min_Fields = {
  __typename?: 'stake_min_fields';
  amount?: Maybe<Scalars['numeric']>;
  campaign_id?: Maybe<Scalars['bigint']>;
  comment_id?: Maybe<Scalars['bigint']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  owner?: Maybe<Scalars['String']>;
  tx_number?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "stake" */
export type Stake_Min_Order_By = {
  amount?: InputMaybe<Order_By>;
  campaign_id?: InputMaybe<Order_By>;
  comment_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  owner?: InputMaybe<Order_By>;
  tx_number?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "stake" */
export type Stake_Mutation_Response = {
  __typename?: 'stake_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Stake>;
};

/** input type for inserting object relation for remote table "stake" */
export type Stake_Obj_Rel_Insert_Input = {
  data: Stake_Insert_Input;
  /** on conflict condition */
  on_conflict?: InputMaybe<Stake_On_Conflict>;
};

/** on conflict condition type for table "stake" */
export type Stake_On_Conflict = {
  constraint: Stake_Constraint;
  update_columns?: Array<Stake_Update_Column>;
  where?: InputMaybe<Stake_Bool_Exp>;
};

/** Ordering options when selecting data from "stake". */
export type Stake_Order_By = {
  amount?: InputMaybe<Order_By>;
  campaign?: InputMaybe<Campaign_Order_By>;
  campaign_id?: InputMaybe<Order_By>;
  comment?: InputMaybe<Comment_Order_By>;
  comment_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  owner?: InputMaybe<Order_By>;
  tx_number?: InputMaybe<Order_By>;
};

/** primary key columns input for table: stake */
export type Stake_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "stake" */
export enum Stake_Select_Column {
  /** column name */
  Amount = 'amount',
  /** column name */
  CampaignId = 'campaign_id',
  /** column name */
  CommentId = 'comment_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Owner = 'owner',
  /** column name */
  TxNumber = 'tx_number'
}

/** input type for updating data in table "stake" */
export type Stake_Set_Input = {
  amount?: InputMaybe<Scalars['numeric']>;
  campaign_id?: InputMaybe<Scalars['bigint']>;
  comment_id?: InputMaybe<Scalars['bigint']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['Int']>;
  owner?: InputMaybe<Scalars['String']>;
  tx_number?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Stake_Stddev_Fields = {
  __typename?: 'stake_stddev_fields';
  amount?: Maybe<Scalars['Float']>;
  campaign_id?: Maybe<Scalars['Float']>;
  comment_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "stake" */
export type Stake_Stddev_Order_By = {
  amount?: InputMaybe<Order_By>;
  campaign_id?: InputMaybe<Order_By>;
  comment_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Stake_Stddev_Pop_Fields = {
  __typename?: 'stake_stddev_pop_fields';
  amount?: Maybe<Scalars['Float']>;
  campaign_id?: Maybe<Scalars['Float']>;
  comment_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "stake" */
export type Stake_Stddev_Pop_Order_By = {
  amount?: InputMaybe<Order_By>;
  campaign_id?: InputMaybe<Order_By>;
  comment_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Stake_Stddev_Samp_Fields = {
  __typename?: 'stake_stddev_samp_fields';
  amount?: Maybe<Scalars['Float']>;
  campaign_id?: Maybe<Scalars['Float']>;
  comment_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "stake" */
export type Stake_Stddev_Samp_Order_By = {
  amount?: InputMaybe<Order_By>;
  campaign_id?: InputMaybe<Order_By>;
  comment_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Stake_Sum_Fields = {
  __typename?: 'stake_sum_fields';
  amount?: Maybe<Scalars['numeric']>;
  campaign_id?: Maybe<Scalars['bigint']>;
  comment_id?: Maybe<Scalars['bigint']>;
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "stake" */
export type Stake_Sum_Order_By = {
  amount?: InputMaybe<Order_By>;
  campaign_id?: InputMaybe<Order_By>;
  comment_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** update columns of table "stake" */
export enum Stake_Update_Column {
  /** column name */
  Amount = 'amount',
  /** column name */
  CampaignId = 'campaign_id',
  /** column name */
  CommentId = 'comment_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Owner = 'owner',
  /** column name */
  TxNumber = 'tx_number'
}

/** aggregate var_pop on columns */
export type Stake_Var_Pop_Fields = {
  __typename?: 'stake_var_pop_fields';
  amount?: Maybe<Scalars['Float']>;
  campaign_id?: Maybe<Scalars['Float']>;
  comment_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "stake" */
export type Stake_Var_Pop_Order_By = {
  amount?: InputMaybe<Order_By>;
  campaign_id?: InputMaybe<Order_By>;
  comment_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Stake_Var_Samp_Fields = {
  __typename?: 'stake_var_samp_fields';
  amount?: Maybe<Scalars['Float']>;
  campaign_id?: Maybe<Scalars['Float']>;
  comment_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "stake" */
export type Stake_Var_Samp_Order_By = {
  amount?: InputMaybe<Order_By>;
  campaign_id?: InputMaybe<Order_By>;
  comment_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Stake_Variance_Fields = {
  __typename?: 'stake_variance_fields';
  amount?: Maybe<Scalars['Float']>;
  campaign_id?: Maybe<Scalars['Float']>;
  comment_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "stake" */
export type Stake_Variance_Order_By = {
  amount?: InputMaybe<Order_By>;
  campaign_id?: InputMaybe<Order_By>;
  comment_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "campaign" */
  campaign: Array<Campaign>;
  /** fetch aggregated fields from the table: "campaign" */
  campaign_aggregate: Campaign_Aggregate;
  /** fetch data from the table: "campaign" using primary key columns */
  campaign_by_pk?: Maybe<Campaign>;
  /** fetch data from the table: "comment" */
  comment: Array<Comment>;
  /** fetch aggregated fields from the table: "comment" */
  comment_aggregate: Comment_Aggregate;
  /** fetch data from the table: "comment" using primary key columns */
  comment_by_pk?: Maybe<Comment>;
  /** fetch data from the table: "stake" */
  stake: Array<Stake>;
  /** fetch aggregated fields from the table: "stake" */
  stake_aggregate: Stake_Aggregate;
  /** fetch data from the table: "stake" using primary key columns */
  stake_by_pk?: Maybe<Stake>;
};


export type Subscription_RootCampaignArgs = {
  distinct_on?: InputMaybe<Array<Campaign_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Campaign_Order_By>>;
  where?: InputMaybe<Campaign_Bool_Exp>;
};


export type Subscription_RootCampaign_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Campaign_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Campaign_Order_By>>;
  where?: InputMaybe<Campaign_Bool_Exp>;
};


export type Subscription_RootCampaign_By_PkArgs = {
  id: Scalars['bigint'];
};


export type Subscription_RootCommentArgs = {
  distinct_on?: InputMaybe<Array<Comment_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Comment_Order_By>>;
  where?: InputMaybe<Comment_Bool_Exp>;
};


export type Subscription_RootComment_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Comment_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Comment_Order_By>>;
  where?: InputMaybe<Comment_Bool_Exp>;
};


export type Subscription_RootComment_By_PkArgs = {
  id: Scalars['bigint'];
};


export type Subscription_RootStakeArgs = {
  distinct_on?: InputMaybe<Array<Stake_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Stake_Order_By>>;
  where?: InputMaybe<Stake_Bool_Exp>;
};


export type Subscription_RootStake_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Stake_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Stake_Order_By>>;
  where?: InputMaybe<Stake_Bool_Exp>;
};


export type Subscription_RootStake_By_PkArgs = {
  id: Scalars['Int'];
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']>;
  _gt?: InputMaybe<Scalars['timestamptz']>;
  _gte?: InputMaybe<Scalars['timestamptz']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamptz']>;
  _lte?: InputMaybe<Scalars['timestamptz']>;
  _neq?: InputMaybe<Scalars['timestamptz']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']>>;
};
