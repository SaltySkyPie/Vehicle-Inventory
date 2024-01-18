import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
};

export type CreateImageInput = {
  id: Scalars['ID']['input'];
  images: Array<Scalars['String']['input']>;
};

export type CreateVehicleInput = {
  brand: Scalars['String']['input'];
  color: Scalars['String']['input'];
  engineVolume: Scalars['Float']['input'];
  fuel: FuelType;
  model: Scalars['String']['input'];
  price: Scalars['Float']['input'];
};

export enum FuelType {
  Diesel = 'Diesel',
  Electric = 'Electric',
  Ethanol = 'Ethanol',
  Hybrid = 'Hybrid',
  Hydrogen = 'Hydrogen',
  NaturalGas = 'NaturalGas',
  Other = 'Other',
  Petrol = 'Petrol'
}

export type Image = {
  __typename?: 'Image';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  updatedAt: Scalars['DateTime']['output'];
  url: Scalars['String']['output'];
  vehicle: Vehicle;
};

export type Mutation = {
  __typename?: 'Mutation';
  addImages: Vehicle;
  createVehicle: Vehicle;
  removeImage: Vehicle;
  removeVehicle: Scalars['Boolean']['output'];
  updateVehicle: Vehicle;
};


export type MutationAddImagesArgs = {
  createImageInput: CreateImageInput;
};


export type MutationCreateVehicleArgs = {
  createVehicleInput: CreateVehicleInput;
};


export type MutationRemoveImageArgs = {
  id: Scalars['ID']['input'];
};


export type MutationRemoveVehicleArgs = {
  id: Scalars['ID']['input'];
};


export type MutationUpdateVehicleArgs = {
  updateVehicleInput: UpdateVehicleInput;
};

export type Query = {
  __typename?: 'Query';
  vehicle: Vehicle;
  vehicles: Array<Vehicle>;
};


export type QueryVehicleArgs = {
  id: Scalars['ID']['input'];
};

export type UpdateVehicleInput = {
  brand?: InputMaybe<Scalars['String']['input']>;
  color?: InputMaybe<Scalars['String']['input']>;
  engineVolume?: InputMaybe<Scalars['Float']['input']>;
  fuel?: InputMaybe<FuelType>;
  id: Scalars['ID']['input'];
  model?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['Float']['input']>;
};

export type Vehicle = {
  __typename?: 'Vehicle';
  brand: Scalars['String']['output'];
  color: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  engineVolume: Scalars['Float']['output'];
  fuel: FuelType;
  id: Scalars['ID']['output'];
  images: Array<Image>;
  model: Scalars['String']['output'];
  price: Scalars['Float']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type GetVehiclesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetVehiclesQuery = { __typename?: 'Query', vehicles: Array<{ __typename?: 'Vehicle', id: string, brand: string, color: string, engineVolume: number, fuel: FuelType, price: number, model: string, createdAt: any, updatedAt: any, images: Array<{ __typename?: 'Image', url: string }> }> };

export type GetVehicleQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type GetVehicleQuery = { __typename?: 'Query', vehicle: { __typename?: 'Vehicle', id: string, brand: string, color: string, engineVolume: number, fuel: FuelType, price: number, model: string, createdAt: any, updatedAt: any, images: Array<{ __typename?: 'Image', id: string, url: string }> } };

export type CreateVehicleMutationVariables = Exact<{
  input: CreateVehicleInput;
}>;


export type CreateVehicleMutation = { __typename?: 'Mutation', createVehicle: { __typename?: 'Vehicle', id: string, brand: string, color: string, engineVolume: number, fuel: FuelType, price: number, model: string, createdAt: any, updatedAt: any, images: Array<{ __typename?: 'Image', id: string, url: string }> } };

export type UpdateVehicleMutationVariables = Exact<{
  input: UpdateVehicleInput;
}>;


export type UpdateVehicleMutation = { __typename?: 'Mutation', updateVehicle: { __typename?: 'Vehicle', id: string, brand: string, color: string, engineVolume: number, fuel: FuelType, price: number, model: string, createdAt: any, updatedAt: any, images: Array<{ __typename?: 'Image', id: string, url: string }> } };

export type RemoveVehicleMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type RemoveVehicleMutation = { __typename?: 'Mutation', removeVehicle: boolean };

export type AddImagesMutationVariables = Exact<{
  input: CreateImageInput;
}>;


export type AddImagesMutation = { __typename?: 'Mutation', addImages: { __typename?: 'Vehicle', id: string, brand: string, color: string, engineVolume: number, fuel: FuelType, price: number, model: string, createdAt: any, updatedAt: any, images: Array<{ __typename?: 'Image', id: string, url: string }> } };

export type RemoveImageMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type RemoveImageMutation = { __typename?: 'Mutation', removeImage: { __typename?: 'Vehicle', id: string, brand: string, color: string, engineVolume: number, fuel: FuelType, price: number, model: string, createdAt: any, updatedAt: any, images: Array<{ __typename?: 'Image', id: string, url: string }> } };


export const GetVehiclesDocument = gql`
    query getVehicles {
  vehicles {
    id
    brand
    color
    engineVolume
    fuel
    images {
      url
    }
    price
    model
    createdAt
    updatedAt
  }
}
    `;

/**
 * __useGetVehiclesQuery__
 *
 * To run a query within a React component, call `useGetVehiclesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetVehiclesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetVehiclesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetVehiclesQuery(baseOptions?: Apollo.QueryHookOptions<GetVehiclesQuery, GetVehiclesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetVehiclesQuery, GetVehiclesQueryVariables>(GetVehiclesDocument, options);
      }
export function useGetVehiclesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetVehiclesQuery, GetVehiclesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetVehiclesQuery, GetVehiclesQueryVariables>(GetVehiclesDocument, options);
        }
export function useGetVehiclesSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetVehiclesQuery, GetVehiclesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetVehiclesQuery, GetVehiclesQueryVariables>(GetVehiclesDocument, options);
        }
export type GetVehiclesQueryHookResult = ReturnType<typeof useGetVehiclesQuery>;
export type GetVehiclesLazyQueryHookResult = ReturnType<typeof useGetVehiclesLazyQuery>;
export type GetVehiclesSuspenseQueryHookResult = ReturnType<typeof useGetVehiclesSuspenseQuery>;
export type GetVehiclesQueryResult = Apollo.QueryResult<GetVehiclesQuery, GetVehiclesQueryVariables>;
export const GetVehicleDocument = gql`
    query getVehicle($id: ID!) {
  vehicle(id: $id) {
    id
    brand
    color
    engineVolume
    fuel
    images {
      id
      url
    }
    price
    model
    createdAt
    updatedAt
  }
}
    `;

/**
 * __useGetVehicleQuery__
 *
 * To run a query within a React component, call `useGetVehicleQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetVehicleQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetVehicleQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetVehicleQuery(baseOptions: Apollo.QueryHookOptions<GetVehicleQuery, GetVehicleQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetVehicleQuery, GetVehicleQueryVariables>(GetVehicleDocument, options);
      }
export function useGetVehicleLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetVehicleQuery, GetVehicleQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetVehicleQuery, GetVehicleQueryVariables>(GetVehicleDocument, options);
        }
export function useGetVehicleSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetVehicleQuery, GetVehicleQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetVehicleQuery, GetVehicleQueryVariables>(GetVehicleDocument, options);
        }
export type GetVehicleQueryHookResult = ReturnType<typeof useGetVehicleQuery>;
export type GetVehicleLazyQueryHookResult = ReturnType<typeof useGetVehicleLazyQuery>;
export type GetVehicleSuspenseQueryHookResult = ReturnType<typeof useGetVehicleSuspenseQuery>;
export type GetVehicleQueryResult = Apollo.QueryResult<GetVehicleQuery, GetVehicleQueryVariables>;
export const CreateVehicleDocument = gql`
    mutation createVehicle($input: CreateVehicleInput!) {
  createVehicle(createVehicleInput: $input) {
    id
    brand
    color
    engineVolume
    fuel
    images {
      id
      url
    }
    price
    model
    createdAt
    updatedAt
  }
}
    `;
export type CreateVehicleMutationFn = Apollo.MutationFunction<CreateVehicleMutation, CreateVehicleMutationVariables>;

/**
 * __useCreateVehicleMutation__
 *
 * To run a mutation, you first call `useCreateVehicleMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateVehicleMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createVehicleMutation, { data, loading, error }] = useCreateVehicleMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateVehicleMutation(baseOptions?: Apollo.MutationHookOptions<CreateVehicleMutation, CreateVehicleMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateVehicleMutation, CreateVehicleMutationVariables>(CreateVehicleDocument, options);
      }
export type CreateVehicleMutationHookResult = ReturnType<typeof useCreateVehicleMutation>;
export type CreateVehicleMutationResult = Apollo.MutationResult<CreateVehicleMutation>;
export type CreateVehicleMutationOptions = Apollo.BaseMutationOptions<CreateVehicleMutation, CreateVehicleMutationVariables>;
export const UpdateVehicleDocument = gql`
    mutation updateVehicle($input: UpdateVehicleInput!) {
  updateVehicle(updateVehicleInput: $input) {
    id
    brand
    color
    engineVolume
    fuel
    images {
      id
      url
    }
    price
    model
    createdAt
    updatedAt
  }
}
    `;
export type UpdateVehicleMutationFn = Apollo.MutationFunction<UpdateVehicleMutation, UpdateVehicleMutationVariables>;

/**
 * __useUpdateVehicleMutation__
 *
 * To run a mutation, you first call `useUpdateVehicleMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateVehicleMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateVehicleMutation, { data, loading, error }] = useUpdateVehicleMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateVehicleMutation(baseOptions?: Apollo.MutationHookOptions<UpdateVehicleMutation, UpdateVehicleMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateVehicleMutation, UpdateVehicleMutationVariables>(UpdateVehicleDocument, options);
      }
export type UpdateVehicleMutationHookResult = ReturnType<typeof useUpdateVehicleMutation>;
export type UpdateVehicleMutationResult = Apollo.MutationResult<UpdateVehicleMutation>;
export type UpdateVehicleMutationOptions = Apollo.BaseMutationOptions<UpdateVehicleMutation, UpdateVehicleMutationVariables>;
export const RemoveVehicleDocument = gql`
    mutation removeVehicle($id: ID!) {
  removeVehicle(id: $id)
}
    `;
export type RemoveVehicleMutationFn = Apollo.MutationFunction<RemoveVehicleMutation, RemoveVehicleMutationVariables>;

/**
 * __useRemoveVehicleMutation__
 *
 * To run a mutation, you first call `useRemoveVehicleMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveVehicleMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeVehicleMutation, { data, loading, error }] = useRemoveVehicleMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useRemoveVehicleMutation(baseOptions?: Apollo.MutationHookOptions<RemoveVehicleMutation, RemoveVehicleMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RemoveVehicleMutation, RemoveVehicleMutationVariables>(RemoveVehicleDocument, options);
      }
export type RemoveVehicleMutationHookResult = ReturnType<typeof useRemoveVehicleMutation>;
export type RemoveVehicleMutationResult = Apollo.MutationResult<RemoveVehicleMutation>;
export type RemoveVehicleMutationOptions = Apollo.BaseMutationOptions<RemoveVehicleMutation, RemoveVehicleMutationVariables>;
export const AddImagesDocument = gql`
    mutation addImages($input: CreateImageInput!) {
  addImages(createImageInput: $input) {
    id
    brand
    color
    engineVolume
    fuel
    images {
      id
      url
    }
    price
    model
    createdAt
    updatedAt
  }
}
    `;
export type AddImagesMutationFn = Apollo.MutationFunction<AddImagesMutation, AddImagesMutationVariables>;

/**
 * __useAddImagesMutation__
 *
 * To run a mutation, you first call `useAddImagesMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddImagesMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addImagesMutation, { data, loading, error }] = useAddImagesMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAddImagesMutation(baseOptions?: Apollo.MutationHookOptions<AddImagesMutation, AddImagesMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddImagesMutation, AddImagesMutationVariables>(AddImagesDocument, options);
      }
export type AddImagesMutationHookResult = ReturnType<typeof useAddImagesMutation>;
export type AddImagesMutationResult = Apollo.MutationResult<AddImagesMutation>;
export type AddImagesMutationOptions = Apollo.BaseMutationOptions<AddImagesMutation, AddImagesMutationVariables>;
export const RemoveImageDocument = gql`
    mutation removeImage($id: ID!) {
  removeImage(id: $id) {
    id
    brand
    color
    engineVolume
    fuel
    images {
      id
      url
    }
    price
    model
    createdAt
    updatedAt
  }
}
    `;
export type RemoveImageMutationFn = Apollo.MutationFunction<RemoveImageMutation, RemoveImageMutationVariables>;

/**
 * __useRemoveImageMutation__
 *
 * To run a mutation, you first call `useRemoveImageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveImageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeImageMutation, { data, loading, error }] = useRemoveImageMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useRemoveImageMutation(baseOptions?: Apollo.MutationHookOptions<RemoveImageMutation, RemoveImageMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RemoveImageMutation, RemoveImageMutationVariables>(RemoveImageDocument, options);
      }
export type RemoveImageMutationHookResult = ReturnType<typeof useRemoveImageMutation>;
export type RemoveImageMutationResult = Apollo.MutationResult<RemoveImageMutation>;
export type RemoveImageMutationOptions = Apollo.BaseMutationOptions<RemoveImageMutation, RemoveImageMutationVariables>;