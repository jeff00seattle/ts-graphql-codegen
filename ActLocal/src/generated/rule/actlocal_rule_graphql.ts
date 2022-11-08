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
  Date: any;
  DateTime: any;
  DateTimeOffset: any;
  Decimal: any;
  GuidGraphType: any;
  Milliseconds: any;
  Seconds: any;
};

export type Mutation = {
  __typename?: 'Mutation';
  deleteRuleByAccountIdGuid: Array<Scalars['ID']>;
  deleteRuleById: MutationResultOutputGraphType;
  deleteRuleByIdsList: MutationResultOutputGraphType;
  deleteRuleByRule: MutationResultOutputGraphType;
  deleteRuleByRulesList: MutationResultOutputGraphType;
  deleteRuleBySiteNameAndExternalAccountId: Array<Scalars['ID']>;
  putRule: MutationResultOutputGraphType;
  putRulesList: MutationResultOutputGraphType;
};


export type MutationDeleteRuleByAccountIdGuidArgs = {
  accountIdGuid: Scalars['ID'];
};


export type MutationDeleteRuleByIdArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteRuleByIdsListArgs = {
  idsList: Array<Scalars['ID']>;
};


export type MutationDeleteRuleByRuleArgs = {
  rule?: InputMaybe<RuleInputGraphType>;
};


export type MutationDeleteRuleByRulesListArgs = {
  rulesList: Array<InputMaybe<RuleInputGraphType>>;
};


export type MutationDeleteRuleBySiteNameAndExternalAccountIdArgs = {
  externalAccountId: Scalars['Int'];
  siteName: Scalars['String'];
};


export type MutationPutRuleArgs = {
  rule?: InputMaybe<RuleInputGraphType>;
};


export type MutationPutRulesListArgs = {
  rulesList: Array<InputMaybe<RuleInputGraphType>>;
};

export type MutationResultOutputGraphType = {
  __typename?: 'MutationResultOutputGraphType';
  success: Scalars['Boolean'];
};

export type Query = {
  __typename?: 'Query';
  getByMaxResults: Array<Scalars['ID']>;
  ruleById?: Maybe<RuleOutputGraphType>;
  ruleCount: Scalars['Int'];
  ruleCountByAccountIdGuid: Scalars['Int'];
  ruleCountBySiteNameAndExternalAccountId: Scalars['Int'];
  rulePKsByAccountIdGuid: Array<Scalars['ID']>;
  rulePKsByAccountIdGuidPaged: Array<Scalars['ID']>;
  rulePKsByAccountIdGuidPagedResultSetInfo?: Maybe<RulePKsWithGetResultSetInfoOutputGraphType>;
  rulePKsBySiteNameAndExternalAccountId: Array<Scalars['ID']>;
  rulePKsBySiteNameAndExternalAccountIdPaged: Array<Scalars['ID']>;
  rulePKsBySiteNameAndExternalAccountIdPagedResultSetInfo?: Maybe<RulePKsWithGetResultSetInfoOutputGraphType>;
  rulesByAccountIdGuid: Array<Maybe<RuleOutputGraphType>>;
  rulesByAccountIdGuidPaged: Array<Maybe<RuleOutputGraphType>>;
  rulesByAccountIdGuidPagedResultSetInfo?: Maybe<RulesWithGetResultSetInfoOutputGraphType>;
  rulesByIdsList: Array<Maybe<RuleOutputGraphType>>;
  rulesByIdsListNotFound?: Maybe<RulesWithNotFoundOutputGraphType>;
  rulesBySiteNameAndExternalAccountId: Array<Maybe<RuleOutputGraphType>>;
  rulesBySiteNameAndExternalAccountIdPaged: Array<Maybe<RuleOutputGraphType>>;
  rulesBySiteNameAndExternalAccountIdPagedResultSetInfo?: Maybe<RulesWithGetResultSetInfoOutputGraphType>;
};


export type QueryGetByMaxResultsArgs = {
  maxResults?: InputMaybe<Scalars['Int']>;
};


export type QueryRuleByIdArgs = {
  id: Scalars['ID'];
};


export type QueryRuleCountByAccountIdGuidArgs = {
  accountIdGuid: Scalars['ID'];
};


export type QueryRuleCountBySiteNameAndExternalAccountIdArgs = {
  externalAccountId: Scalars['Int'];
  siteName: Scalars['String'];
};


export type QueryRulePKsByAccountIdGuidArgs = {
  accountIdGuid: Scalars['ID'];
};


export type QueryRulePKsByAccountIdGuidPagedArgs = {
  accountIdGuid: Scalars['ID'];
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  sortOrder?: InputMaybe<SauceSortOrderInputGraphType>;
};


export type QueryRulePKsByAccountIdGuidPagedResultSetInfoArgs = {
  accountIdGuid: Scalars['ID'];
  getOptions?: InputMaybe<SauceGetOptionsInputGraphType>;
};


export type QueryRulePKsBySiteNameAndExternalAccountIdArgs = {
  externalAccountId: Scalars['Int'];
  siteName: Scalars['String'];
};


export type QueryRulePKsBySiteNameAndExternalAccountIdPagedArgs = {
  externalAccountId: Scalars['Int'];
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  siteName: Scalars['String'];
  sortOrder?: InputMaybe<SauceSortOrderInputGraphType>;
};


export type QueryRulePKsBySiteNameAndExternalAccountIdPagedResultSetInfoArgs = {
  externalAccountId: Scalars['Int'];
  getOptions?: InputMaybe<SauceGetOptionsInputGraphType>;
  siteName: Scalars['String'];
};


export type QueryRulesByAccountIdGuidArgs = {
  accountIdGuid: Scalars['ID'];
};


export type QueryRulesByAccountIdGuidPagedArgs = {
  accountIdGuid: Scalars['ID'];
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  sortOrder?: InputMaybe<SauceSortOrderInputGraphType>;
};


export type QueryRulesByAccountIdGuidPagedResultSetInfoArgs = {
  accountIdGuid: Scalars['ID'];
  getOptions?: InputMaybe<SauceGetOptionsInputGraphType>;
};


export type QueryRulesByIdsListArgs = {
  idsList: Array<Scalars['ID']>;
};


export type QueryRulesByIdsListNotFoundArgs = {
  idsList: Array<Scalars['ID']>;
};


export type QueryRulesBySiteNameAndExternalAccountIdArgs = {
  externalAccountId: Scalars['Int'];
  siteName: Scalars['String'];
};


export type QueryRulesBySiteNameAndExternalAccountIdPagedArgs = {
  externalAccountId: Scalars['Int'];
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  siteName: Scalars['String'];
  sortOrder?: InputMaybe<SauceSortOrderInputGraphType>;
};


export type QueryRulesBySiteNameAndExternalAccountIdPagedResultSetInfoArgs = {
  externalAccountId: Scalars['Int'];
  getOptions?: InputMaybe<SauceGetOptionsInputGraphType>;
  siteName: Scalars['String'];
};

export type RuleInputGraphType = {
  accountIdGuid: Scalars['ID'];
  accountType?: InputMaybe<Scalars['String']>;
  action: Scalars['String'];
  createdAt: Scalars['DateTime'];
  externalAccountId: Scalars['Int'];
  filter: Scalars['String'];
  id: Scalars['ID'];
  isActive: Scalars['Boolean'];
  name: Scalars['String'];
  siteName: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type RuleOutputGraphType = {
  __typename?: 'RuleOutputGraphType';
  accountIdGuid: Scalars['ID'];
  accountType?: Maybe<Scalars['String']>;
  action: Scalars['String'];
  createdAt: Scalars['DateTime'];
  externalAccountId: Scalars['Int'];
  filter: Scalars['String'];
  id: Scalars['ID'];
  isActive: Scalars['Boolean'];
  name: Scalars['String'];
  siteName: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type RulePKsWithGetResultSetInfoOutputGraphType = {
  __typename?: 'RulePKsWithGetResultSetInfoOutputGraphType';
  getResultSetInfo?: Maybe<SauceGetResultSetInfoOutputGraphType>;
  results: Array<Scalars['ID']>;
};

export type RulesWithGetResultSetInfoOutputGraphType = {
  __typename?: 'RulesWithGetResultSetInfoOutputGraphType';
  getResultSetInfo?: Maybe<SauceGetResultSetInfoOutputGraphType>;
  results: Array<Maybe<RuleOutputGraphType>>;
};

export type RulesWithNotFoundOutputGraphType = {
  __typename?: 'RulesWithNotFoundOutputGraphType';
  notFound?: Maybe<Array<Maybe<Scalars['GuidGraphType']>>>;
  results: Array<Maybe<RuleOutputGraphType>>;
};

export type SauceGetOptionsInputGraphType = {
  page: Scalars['Int'];
  pageCountLookAheadHint: Scalars['Int'];
  pageSize: Scalars['Int'];
  sortOrder: SauceSortOrderInputGraphType;
};

export type SauceGetResultSetInfoOutputGraphType = {
  __typename?: 'SauceGetResultSetInfoOutputGraphType';
  pageCountLookAheadResult: Scalars['Int'];
};

export enum SauceSortOrderInputGraphType {
  Ascending = 'ASCENDING',
  /** The rows are sorted in ascending order */
  Ascending = 'Ascending',
  Descending = 'DESCENDING',
  /** The rows are sorted in descending order */
  Descending = 'Descending'
}
