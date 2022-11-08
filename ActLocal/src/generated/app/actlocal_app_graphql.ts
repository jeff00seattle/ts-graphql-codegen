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

export type AppInputGraphType = {
  accountIdGuid: Scalars['ID'];
  accountType?: InputMaybe<Scalars['String']>;
  authProfile: Scalars['String'];
  authProfileId: Scalars['String'];
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  externalAccountId: Scalars['Int'];
  id: Scalars['ID'];
  isActive: Scalars['Boolean'];
  provider: Scalars['String'];
  siteName: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  userId?: InputMaybe<Scalars['ID']>;
};

export type AppOutputGraphType = {
  __typename?: 'AppOutputGraphType';
  accountIdGuid: Scalars['ID'];
  accountType?: Maybe<Scalars['String']>;
  authProfile: Scalars['String'];
  authProfileId: Scalars['String'];
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  externalAccountId: Scalars['Int'];
  id: Scalars['ID'];
  isActive: Scalars['Boolean'];
  provider: Scalars['String'];
  siteName: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  userId?: Maybe<Scalars['ID']>;
};

export type AppPKsWithGetResultSetInfoOutputGraphType = {
  __typename?: 'AppPKsWithGetResultSetInfoOutputGraphType';
  getResultSetInfo?: Maybe<SauceGetResultSetInfoOutputGraphType>;
  results: Array<Scalars['ID']>;
};

export type AppsWithGetResultSetInfoOutputGraphType = {
  __typename?: 'AppsWithGetResultSetInfoOutputGraphType';
  getResultSetInfo?: Maybe<SauceGetResultSetInfoOutputGraphType>;
  results: Array<Maybe<AppOutputGraphType>>;
};

export type AppsWithNotFoundOutputGraphType = {
  __typename?: 'AppsWithNotFoundOutputGraphType';
  notFound?: Maybe<Array<Maybe<Scalars['GuidGraphType']>>>;
  results: Array<Maybe<AppOutputGraphType>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  deleteAppByAccountIdGuid: Array<Scalars['ID']>;
  deleteAppByApp: MutationResultOutputGraphType;
  deleteAppByAppsList: MutationResultOutputGraphType;
  deleteAppById: MutationResultOutputGraphType;
  deleteAppByIdsList: MutationResultOutputGraphType;
  deleteAppByProviderAndAuthProfileId: Array<Scalars['ID']>;
  deleteAppBySiteNameAndExternalAccountId: Array<Scalars['ID']>;
  deleteAppBySiteNameAndExternalAccountIdAndProviderAndAuthProfileId: Array<Scalars['ID']>;
  deleteAppBySiteNameAndExternalAccountIdAndUserIdAndProviderAndAuthProfileId: Array<Scalars['ID']>;
  putApp: MutationResultOutputGraphType;
  putAppsList: MutationResultOutputGraphType;
};


export type MutationDeleteAppByAccountIdGuidArgs = {
  accountIdGuid: Scalars['ID'];
};


export type MutationDeleteAppByAppArgs = {
  app?: InputMaybe<AppInputGraphType>;
};


export type MutationDeleteAppByAppsListArgs = {
  appsList: Array<InputMaybe<AppInputGraphType>>;
};


export type MutationDeleteAppByIdArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteAppByIdsListArgs = {
  idsList: Array<Scalars['ID']>;
};


export type MutationDeleteAppByProviderAndAuthProfileIdArgs = {
  authProfileId: Scalars['String'];
  provider: Scalars['String'];
};


export type MutationDeleteAppBySiteNameAndExternalAccountIdArgs = {
  externalAccountId: Scalars['Int'];
  siteName: Scalars['String'];
};


export type MutationDeleteAppBySiteNameAndExternalAccountIdAndProviderAndAuthProfileIdArgs = {
  authProfileId: Scalars['String'];
  externalAccountId: Scalars['Int'];
  provider: Scalars['String'];
  siteName: Scalars['String'];
};


export type MutationDeleteAppBySiteNameAndExternalAccountIdAndUserIdAndProviderAndAuthProfileIdArgs = {
  authProfileId: Scalars['String'];
  externalAccountId: Scalars['Int'];
  provider: Scalars['String'];
  siteName: Scalars['String'];
  userId?: InputMaybe<Scalars['ID']>;
};


export type MutationPutAppArgs = {
  app?: InputMaybe<AppInputGraphType>;
};


export type MutationPutAppsListArgs = {
  appsList: Array<InputMaybe<AppInputGraphType>>;
};

export type MutationResultOutputGraphType = {
  __typename?: 'MutationResultOutputGraphType';
  success: Scalars['Boolean'];
};

export type Query = {
  __typename?: 'Query';
  appById?: Maybe<AppOutputGraphType>;
  appCount: Scalars['Int'];
  appCountByAccountIdGuid: Scalars['Int'];
  appCountByProviderAndAuthProfileId: Scalars['Int'];
  appCountBySiteNameAndExternalAccountId: Scalars['Int'];
  appCountBySiteNameAndExternalAccountIdAndProviderAndAuthProfileId: Scalars['Int'];
  appCountBySiteNameAndExternalAccountIdAndUserIdAndProviderAndAuthProfileId: Scalars['Int'];
  appPKsByAccountIdGuid: Array<Scalars['ID']>;
  appPKsByAccountIdGuidPaged: Array<Scalars['ID']>;
  appPKsByAccountIdGuidPagedResultSetInfo?: Maybe<AppPKsWithGetResultSetInfoOutputGraphType>;
  appPKsByProviderAndAuthProfileId: Array<Scalars['ID']>;
  appPKsByProviderAndAuthProfileIdPaged: Array<Scalars['ID']>;
  appPKsByProviderAndAuthProfileIdPagedResultSetInfo?: Maybe<AppPKsWithGetResultSetInfoOutputGraphType>;
  appPKsBySiteNameAndExternalAccountId: Array<Scalars['ID']>;
  appPKsBySiteNameAndExternalAccountIdAndProviderAndAuthProfileId: Array<Scalars['ID']>;
  appPKsBySiteNameAndExternalAccountIdAndProviderAndAuthProfileIdPaged: Array<Scalars['ID']>;
  appPKsBySiteNameAndExternalAccountIdAndProviderAndAuthProfileIdPagedResultSetInfo?: Maybe<AppPKsWithGetResultSetInfoOutputGraphType>;
  appPKsBySiteNameAndExternalAccountIdAndProviderAndAuthProfileIdStartsWithBeginAndAuthProfileIdStartsWithEndPaged: Array<Scalars['ID']>;
  appPKsBySiteNameAndExternalAccountIdAndProviderAndAuthProfileIdStartsWithBeginAndAuthProfileIdStartsWithEndPagedResultSetInfo?: Maybe<AppPKsWithGetResultSetInfoOutputGraphType>;
  appPKsBySiteNameAndExternalAccountIdAndUserIdAndProviderAndAuthProfileId: Array<Scalars['ID']>;
  appPKsBySiteNameAndExternalAccountIdAndUserIdAndProviderAndAuthProfileIdPaged: Array<Scalars['ID']>;
  appPKsBySiteNameAndExternalAccountIdAndUserIdAndProviderAndAuthProfileIdPagedResultSetInfo?: Maybe<AppPKsWithGetResultSetInfoOutputGraphType>;
  appPKsBySiteNameAndExternalAccountIdAndUserIdAndProviderAndAuthProfileIdStartsWithBeginAndAuthProfileIdStartsWithEndPaged: Array<Scalars['ID']>;
  appPKsBySiteNameAndExternalAccountIdAndUserIdAndProviderAndAuthProfileIdStartsWithBeginAndAuthProfileIdStartsWithEndPagedResultSetInfo?: Maybe<AppPKsWithGetResultSetInfoOutputGraphType>;
  appPKsBySiteNameAndExternalAccountIdPaged: Array<Scalars['ID']>;
  appPKsBySiteNameAndExternalAccountIdPagedResultSetInfo?: Maybe<AppPKsWithGetResultSetInfoOutputGraphType>;
  appsByAccountIdGuid: Array<Maybe<AppOutputGraphType>>;
  appsByAccountIdGuidPaged: Array<Maybe<AppOutputGraphType>>;
  appsByAccountIdGuidPagedResultSetInfo?: Maybe<AppsWithGetResultSetInfoOutputGraphType>;
  appsByIdsList: Array<Maybe<AppOutputGraphType>>;
  appsByIdsListNotFound?: Maybe<AppsWithNotFoundOutputGraphType>;
  appsByProviderAndAuthProfileId: Array<Maybe<AppOutputGraphType>>;
  appsByProviderAndAuthProfileIdPaged: Array<Maybe<AppOutputGraphType>>;
  appsByProviderAndAuthProfileIdPagedResultSetInfo?: Maybe<AppsWithGetResultSetInfoOutputGraphType>;
  appsBySiteNameAndExternalAccountId: Array<Maybe<AppOutputGraphType>>;
  appsBySiteNameAndExternalAccountIdAndProviderAndAuthProfileId: Array<Maybe<AppOutputGraphType>>;
  appsBySiteNameAndExternalAccountIdAndProviderAndAuthProfileIdPaged: Array<Maybe<AppOutputGraphType>>;
  appsBySiteNameAndExternalAccountIdAndProviderAndAuthProfileIdPagedResultSetInfo?: Maybe<AppsWithGetResultSetInfoOutputGraphType>;
  appsBySiteNameAndExternalAccountIdAndProviderAndAuthProfileIdStartsWithBeginAndAuthProfileIdStartsWithEndPaged: Array<Maybe<AppOutputGraphType>>;
  appsBySiteNameAndExternalAccountIdAndProviderAndAuthProfileIdStartsWithBeginAndAuthProfileIdStartsWithEndPagedResultSetInfo?: Maybe<AppsWithGetResultSetInfoOutputGraphType>;
  appsBySiteNameAndExternalAccountIdAndUserIdAndProviderAndAuthProfileId: Array<Maybe<AppOutputGraphType>>;
  appsBySiteNameAndExternalAccountIdAndUserIdAndProviderAndAuthProfileIdPaged: Array<Maybe<AppOutputGraphType>>;
  appsBySiteNameAndExternalAccountIdAndUserIdAndProviderAndAuthProfileIdPagedResultSetInfo?: Maybe<AppsWithGetResultSetInfoOutputGraphType>;
  appsBySiteNameAndExternalAccountIdAndUserIdAndProviderAndAuthProfileIdStartsWithBeginAndAuthProfileIdStartsWithEndPaged: Array<Maybe<AppOutputGraphType>>;
  appsBySiteNameAndExternalAccountIdAndUserIdAndProviderAndAuthProfileIdStartsWithBeginAndAuthProfileIdStartsWithEndPagedResultSetInfo?: Maybe<AppsWithGetResultSetInfoOutputGraphType>;
  appsBySiteNameAndExternalAccountIdPaged: Array<Maybe<AppOutputGraphType>>;
  appsBySiteNameAndExternalAccountIdPagedResultSetInfo?: Maybe<AppsWithGetResultSetInfoOutputGraphType>;
  getByMaxResults: Array<Scalars['ID']>;
};


export type QueryAppByIdArgs = {
  id: Scalars['ID'];
};


export type QueryAppCountByAccountIdGuidArgs = {
  accountIdGuid: Scalars['ID'];
};


export type QueryAppCountByProviderAndAuthProfileIdArgs = {
  authProfileId: Scalars['String'];
  provider: Scalars['String'];
};


export type QueryAppCountBySiteNameAndExternalAccountIdArgs = {
  externalAccountId: Scalars['Int'];
  siteName: Scalars['String'];
};


export type QueryAppCountBySiteNameAndExternalAccountIdAndProviderAndAuthProfileIdArgs = {
  authProfileId: Scalars['String'];
  externalAccountId: Scalars['Int'];
  provider: Scalars['String'];
  siteName: Scalars['String'];
};


export type QueryAppCountBySiteNameAndExternalAccountIdAndUserIdAndProviderAndAuthProfileIdArgs = {
  authProfileId: Scalars['String'];
  externalAccountId: Scalars['Int'];
  provider: Scalars['String'];
  siteName: Scalars['String'];
  userId?: InputMaybe<Scalars['ID']>;
};


export type QueryAppPKsByAccountIdGuidArgs = {
  accountIdGuid: Scalars['ID'];
};


export type QueryAppPKsByAccountIdGuidPagedArgs = {
  accountIdGuid: Scalars['ID'];
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  sortOrder?: InputMaybe<SauceSortOrderInputGraphType>;
};


export type QueryAppPKsByAccountIdGuidPagedResultSetInfoArgs = {
  accountIdGuid: Scalars['ID'];
  getOptions?: InputMaybe<SauceGetOptionsInputGraphType>;
};


export type QueryAppPKsByProviderAndAuthProfileIdArgs = {
  authProfileId: Scalars['String'];
  provider: Scalars['String'];
};


export type QueryAppPKsByProviderAndAuthProfileIdPagedArgs = {
  authProfileId: Scalars['String'];
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  provider: Scalars['String'];
  sortOrder?: InputMaybe<SauceSortOrderInputGraphType>;
};


export type QueryAppPKsByProviderAndAuthProfileIdPagedResultSetInfoArgs = {
  authProfileId: Scalars['String'];
  getOptions?: InputMaybe<SauceGetOptionsInputGraphType>;
  provider: Scalars['String'];
};


export type QueryAppPKsBySiteNameAndExternalAccountIdArgs = {
  externalAccountId: Scalars['Int'];
  siteName: Scalars['String'];
};


export type QueryAppPKsBySiteNameAndExternalAccountIdAndProviderAndAuthProfileIdArgs = {
  authProfileId: Scalars['String'];
  externalAccountId: Scalars['Int'];
  provider: Scalars['String'];
  siteName: Scalars['String'];
};


export type QueryAppPKsBySiteNameAndExternalAccountIdAndProviderAndAuthProfileIdPagedArgs = {
  authProfileId: Scalars['String'];
  externalAccountId: Scalars['Int'];
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  provider: Scalars['String'];
  siteName: Scalars['String'];
  sortOrder?: InputMaybe<SauceSortOrderInputGraphType>;
};


export type QueryAppPKsBySiteNameAndExternalAccountIdAndProviderAndAuthProfileIdPagedResultSetInfoArgs = {
  authProfileId: Scalars['String'];
  externalAccountId: Scalars['Int'];
  getOptions?: InputMaybe<SauceGetOptionsInputGraphType>;
  provider: Scalars['String'];
  siteName: Scalars['String'];
};


export type QueryAppPKsBySiteNameAndExternalAccountIdAndProviderAndAuthProfileIdStartsWithBeginAndAuthProfileIdStartsWithEndPagedArgs = {
  authProfileIdStartsWithBegin: Scalars['String'];
  authProfileIdStartsWithEnd: Scalars['String'];
  externalAccountId: Scalars['Int'];
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  provider: Scalars['String'];
  siteName: Scalars['String'];
  sortOrder?: InputMaybe<SauceSortOrderInputGraphType>;
};


export type QueryAppPKsBySiteNameAndExternalAccountIdAndProviderAndAuthProfileIdStartsWithBeginAndAuthProfileIdStartsWithEndPagedResultSetInfoArgs = {
  authProfileIdStartsWithBegin: Scalars['String'];
  authProfileIdStartsWithEnd: Scalars['String'];
  externalAccountId: Scalars['Int'];
  getOptions?: InputMaybe<SauceGetOptionsInputGraphType>;
  provider: Scalars['String'];
  siteName: Scalars['String'];
};


export type QueryAppPKsBySiteNameAndExternalAccountIdAndUserIdAndProviderAndAuthProfileIdArgs = {
  authProfileId: Scalars['String'];
  externalAccountId: Scalars['Int'];
  provider: Scalars['String'];
  siteName: Scalars['String'];
  userId?: InputMaybe<Scalars['ID']>;
};


export type QueryAppPKsBySiteNameAndExternalAccountIdAndUserIdAndProviderAndAuthProfileIdPagedArgs = {
  authProfileId: Scalars['String'];
  externalAccountId: Scalars['Int'];
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  provider: Scalars['String'];
  siteName: Scalars['String'];
  sortOrder?: InputMaybe<SauceSortOrderInputGraphType>;
  userId?: InputMaybe<Scalars['ID']>;
};


export type QueryAppPKsBySiteNameAndExternalAccountIdAndUserIdAndProviderAndAuthProfileIdPagedResultSetInfoArgs = {
  authProfileId: Scalars['String'];
  externalAccountId: Scalars['Int'];
  getOptions?: InputMaybe<SauceGetOptionsInputGraphType>;
  provider: Scalars['String'];
  siteName: Scalars['String'];
  userId?: InputMaybe<Scalars['ID']>;
};


export type QueryAppPKsBySiteNameAndExternalAccountIdAndUserIdAndProviderAndAuthProfileIdStartsWithBeginAndAuthProfileIdStartsWithEndPagedArgs = {
  authProfileIdStartsWithBegin: Scalars['String'];
  authProfileIdStartsWithEnd: Scalars['String'];
  externalAccountId: Scalars['Int'];
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  provider: Scalars['String'];
  siteName: Scalars['String'];
  sortOrder?: InputMaybe<SauceSortOrderInputGraphType>;
  userId?: InputMaybe<Scalars['ID']>;
};


export type QueryAppPKsBySiteNameAndExternalAccountIdAndUserIdAndProviderAndAuthProfileIdStartsWithBeginAndAuthProfileIdStartsWithEndPagedResultSetInfoArgs = {
  authProfileIdStartsWithBegin: Scalars['String'];
  authProfileIdStartsWithEnd: Scalars['String'];
  externalAccountId: Scalars['Int'];
  getOptions?: InputMaybe<SauceGetOptionsInputGraphType>;
  provider: Scalars['String'];
  siteName: Scalars['String'];
  userId?: InputMaybe<Scalars['ID']>;
};


export type QueryAppPKsBySiteNameAndExternalAccountIdPagedArgs = {
  externalAccountId: Scalars['Int'];
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  siteName: Scalars['String'];
  sortOrder?: InputMaybe<SauceSortOrderInputGraphType>;
};


export type QueryAppPKsBySiteNameAndExternalAccountIdPagedResultSetInfoArgs = {
  externalAccountId: Scalars['Int'];
  getOptions?: InputMaybe<SauceGetOptionsInputGraphType>;
  siteName: Scalars['String'];
};


export type QueryAppsByAccountIdGuidArgs = {
  accountIdGuid: Scalars['ID'];
};


export type QueryAppsByAccountIdGuidPagedArgs = {
  accountIdGuid: Scalars['ID'];
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  sortOrder?: InputMaybe<SauceSortOrderInputGraphType>;
};


export type QueryAppsByAccountIdGuidPagedResultSetInfoArgs = {
  accountIdGuid: Scalars['ID'];
  getOptions?: InputMaybe<SauceGetOptionsInputGraphType>;
};


export type QueryAppsByIdsListArgs = {
  idsList: Array<Scalars['ID']>;
};


export type QueryAppsByIdsListNotFoundArgs = {
  idsList: Array<Scalars['ID']>;
};


export type QueryAppsByProviderAndAuthProfileIdArgs = {
  authProfileId: Scalars['String'];
  provider: Scalars['String'];
};


export type QueryAppsByProviderAndAuthProfileIdPagedArgs = {
  authProfileId: Scalars['String'];
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  provider: Scalars['String'];
  sortOrder?: InputMaybe<SauceSortOrderInputGraphType>;
};


export type QueryAppsByProviderAndAuthProfileIdPagedResultSetInfoArgs = {
  authProfileId: Scalars['String'];
  getOptions?: InputMaybe<SauceGetOptionsInputGraphType>;
  provider: Scalars['String'];
};


export type QueryAppsBySiteNameAndExternalAccountIdArgs = {
  externalAccountId: Scalars['Int'];
  siteName: Scalars['String'];
};


export type QueryAppsBySiteNameAndExternalAccountIdAndProviderAndAuthProfileIdArgs = {
  authProfileId: Scalars['String'];
  externalAccountId: Scalars['Int'];
  provider: Scalars['String'];
  siteName: Scalars['String'];
};


export type QueryAppsBySiteNameAndExternalAccountIdAndProviderAndAuthProfileIdPagedArgs = {
  authProfileId: Scalars['String'];
  externalAccountId: Scalars['Int'];
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  provider: Scalars['String'];
  siteName: Scalars['String'];
  sortOrder?: InputMaybe<SauceSortOrderInputGraphType>;
};


export type QueryAppsBySiteNameAndExternalAccountIdAndProviderAndAuthProfileIdPagedResultSetInfoArgs = {
  authProfileId: Scalars['String'];
  externalAccountId: Scalars['Int'];
  getOptions?: InputMaybe<SauceGetOptionsInputGraphType>;
  provider: Scalars['String'];
  siteName: Scalars['String'];
};


export type QueryAppsBySiteNameAndExternalAccountIdAndProviderAndAuthProfileIdStartsWithBeginAndAuthProfileIdStartsWithEndPagedArgs = {
  authProfileIdStartsWithBegin: Scalars['String'];
  authProfileIdStartsWithEnd: Scalars['String'];
  externalAccountId: Scalars['Int'];
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  provider: Scalars['String'];
  siteName: Scalars['String'];
  sortOrder?: InputMaybe<SauceSortOrderInputGraphType>;
};


export type QueryAppsBySiteNameAndExternalAccountIdAndProviderAndAuthProfileIdStartsWithBeginAndAuthProfileIdStartsWithEndPagedResultSetInfoArgs = {
  authProfileIdStartsWithBegin: Scalars['String'];
  authProfileIdStartsWithEnd: Scalars['String'];
  externalAccountId: Scalars['Int'];
  getOptions?: InputMaybe<SauceGetOptionsInputGraphType>;
  provider: Scalars['String'];
  siteName: Scalars['String'];
};


export type QueryAppsBySiteNameAndExternalAccountIdAndUserIdAndProviderAndAuthProfileIdArgs = {
  authProfileId: Scalars['String'];
  externalAccountId: Scalars['Int'];
  provider: Scalars['String'];
  siteName: Scalars['String'];
  userId?: InputMaybe<Scalars['ID']>;
};


export type QueryAppsBySiteNameAndExternalAccountIdAndUserIdAndProviderAndAuthProfileIdPagedArgs = {
  authProfileId: Scalars['String'];
  externalAccountId: Scalars['Int'];
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  provider: Scalars['String'];
  siteName: Scalars['String'];
  sortOrder?: InputMaybe<SauceSortOrderInputGraphType>;
  userId?: InputMaybe<Scalars['ID']>;
};


export type QueryAppsBySiteNameAndExternalAccountIdAndUserIdAndProviderAndAuthProfileIdPagedResultSetInfoArgs = {
  authProfileId: Scalars['String'];
  externalAccountId: Scalars['Int'];
  getOptions?: InputMaybe<SauceGetOptionsInputGraphType>;
  provider: Scalars['String'];
  siteName: Scalars['String'];
  userId?: InputMaybe<Scalars['ID']>;
};


export type QueryAppsBySiteNameAndExternalAccountIdAndUserIdAndProviderAndAuthProfileIdStartsWithBeginAndAuthProfileIdStartsWithEndPagedArgs = {
  authProfileIdStartsWithBegin: Scalars['String'];
  authProfileIdStartsWithEnd: Scalars['String'];
  externalAccountId: Scalars['Int'];
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  provider: Scalars['String'];
  siteName: Scalars['String'];
  sortOrder?: InputMaybe<SauceSortOrderInputGraphType>;
  userId?: InputMaybe<Scalars['ID']>;
};


export type QueryAppsBySiteNameAndExternalAccountIdAndUserIdAndProviderAndAuthProfileIdStartsWithBeginAndAuthProfileIdStartsWithEndPagedResultSetInfoArgs = {
  authProfileIdStartsWithBegin: Scalars['String'];
  authProfileIdStartsWithEnd: Scalars['String'];
  externalAccountId: Scalars['Int'];
  getOptions?: InputMaybe<SauceGetOptionsInputGraphType>;
  provider: Scalars['String'];
  siteName: Scalars['String'];
  userId?: InputMaybe<Scalars['ID']>;
};


export type QueryAppsBySiteNameAndExternalAccountIdPagedArgs = {
  externalAccountId: Scalars['Int'];
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  siteName: Scalars['String'];
  sortOrder?: InputMaybe<SauceSortOrderInputGraphType>;
};


export type QueryAppsBySiteNameAndExternalAccountIdPagedResultSetInfoArgs = {
  externalAccountId: Scalars['Int'];
  getOptions?: InputMaybe<SauceGetOptionsInputGraphType>;
  siteName: Scalars['String'];
};


export type QueryGetByMaxResultsArgs = {
  maxResults?: InputMaybe<Scalars['Int']>;
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
