export interface Root {
    _version: number
    locale: string
    uid: string
    ACL: Acl
    _in_progress: boolean
    character_title: string
    characterimage: Characterimage
    contact_info: ContactInfo
    created_at: string
    created_by: string
    description: string
    power: string[]
    seo: Seo
    tags: string[]
    title: string
    updated_at: string
    updated_by: string
    url: string
  }
  
  export interface Acl {
    $: GeneratedType
  }
  
  export interface GeneratedType {}
  
  export interface Characterimage {
    _version: number
    is_dir: boolean
    uid: string
    ACL: Acl2
    content_type: string
    created_at: string
    created_by: string
    description: string
    file_size: string
    filename: string
    parent_uid: string
    tags: any[]
    title: string
    updated_at: string
    updated_by: string
    publish_details: PublishDetails
    url: string
    $: GeneratedType4
  }
  
  export interface Acl2 {
    $: GeneratedType2
  }
  
  export interface GeneratedType2 {}
  
  export interface PublishDetails {
    environment: string
    locale: string
    time: string
    user: string
    $: GeneratedType3
  }
  
  export interface GeneratedType3 {
    environment: Environment
    locale: Locale
    time: Time
    user: User
  }
  
  export interface Environment {
    "data-cslp": string
  }
  
  export interface Locale {
    "data-cslp": string
  }
  
  export interface Time {
    "data-cslp": string
  }
  
  export interface User {
    "data-cslp": string
  }
  
  export interface GeneratedType4 {
    _version: Version
    is_dir: IsDir
    uid: Uid
    ACL: Acl3
    content_type: ContentType
    created_at: CreatedAt
    created_by: CreatedBy
    description: Description
    file_size: FileSize
    filename: Filename
    parent_uid: ParentUid
    tags: Tags
    title: Title
    updated_at: UpdatedAt
    updated_by: UpdatedBy
    publish_details: PublishDetails2
    url: Url
  }
  
  export interface Version {
    "data-cslp": string
  }
  
  export interface IsDir {
    "data-cslp": string
  }
  
  export interface Uid {
    "data-cslp": string
  }
  
  export interface Acl3 {
    "data-cslp": string
  }
  
  export interface ContentType {
    "data-cslp": string
  }
  
  export interface CreatedAt {
    "data-cslp": string
  }
  
  export interface CreatedBy {
    "data-cslp": string
  }
  
  export interface Description {
    "data-cslp": string
  }
  
  export interface FileSize {
    "data-cslp": string
  }
  
  export interface Filename {
    "data-cslp": string
  }
  
  export interface ParentUid {
    "data-cslp": string
  }
  
  export interface Tags {
    "data-cslp": string
  }
  
  export interface Title {
    "data-cslp": string
  }
  
  export interface UpdatedAt {
    "data-cslp": string
  }
  
  export interface UpdatedBy {
    "data-cslp": string
  }
  
  export interface PublishDetails2 {
    "data-cslp": string
  }
  
  export interface Url {
    "data-cslp": string
  }
  
  export interface ContactInfo {
    phone: string
    email: string
    $: GeneratedType5
  }
  
  export interface GeneratedType5 {
    phone: Phone
    email: Email
  }
  
  export interface Phone {
    "data-cslp": string
  }
  
  export interface Email {
    "data-cslp": string
  }
  
  export interface Description2 {
    type: string
    attrs: Attrs
    uid: string
    children: Children[]
    _version: number
    $: GeneratedType10
  }
  
  export interface Attrs {
    $: GeneratedType6
  }
  
  export interface GeneratedType6 {}
  
  export interface Children {
    type: string
    attrs: Attrs2
    uid: string
    children: Children2[]
    $: GeneratedType9
  }
  
  export interface Attrs2 {
    $: GeneratedType7
  }
  
  export interface GeneratedType7 {}
  
  export interface Children2 {
    text: string
    $: GeneratedType8
  }
  
  export interface GeneratedType8 {
    text: Text
  }
  
  export interface Text {
    "data-cslp": string
  }
  
  export interface GeneratedType9 {
    type: Type
    attrs: Attrs3
    uid: Uid2
    children__0: Children0
    children__parent: ChildrenParent
    children: Children3
  }
  
  export interface Type {
    "data-cslp": string
  }
  
  export interface Attrs3 {
    "data-cslp": string
  }
  
  export interface Uid2 {
    "data-cslp": string
  }
  
  export interface Children0 {
    "data-cslp": string
  }
  
  export interface ChildrenParent {
    "data-cslp-parent-field": string
  }
  
  export interface Children3 {
    "data-cslp": string
  }
  
  export interface GeneratedType10 {
    type: Type2
    attrs: Attrs4
    uid: Uid3
    children__0: Children02
    children__parent: ChildrenParent2
    children: Children4
    _version: Version2
  }
  
  export interface Type2 {
    "data-cslp": string
  }
  
  export interface Attrs4 {
    "data-cslp": string
  }
  
  export interface Uid3 {
    "data-cslp": string
  }
  
  export interface Children02 {
    "data-cslp": string
  }
  
  export interface ChildrenParent2 {
    "data-cslp-parent-field": string
  }
  
  export interface Children4 {
    "data-cslp": string
  }
  
  export interface Version2 {
    "data-cslp": string
  }
  
  export interface Seo {
    meta_title: string
    meta_description: string
    keywords: string
    enable_search_indexing: boolean
    $: GeneratedType11
  }
  
  export interface GeneratedType11 {
    meta_title: MetaTitle
    meta_description: MetaDescription
    keywords: Keywords
    enable_search_indexing: EnableSearchIndexing
  }
  
  export interface MetaTitle {
    "data-cslp": string
  }
  
  export interface MetaDescription {
    "data-cslp": string
  }
  
  export interface Keywords {
    "data-cslp": string
  }
  
  export interface EnableSearchIndexing {
    "data-cslp": string
  }
  