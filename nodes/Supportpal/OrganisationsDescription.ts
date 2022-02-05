import { INodeProperties } from 'n8n-workflow';

export const organisationsDescription = [
	// ----------------------------------
	//         Fields: organisation
	// ----------------------------------
	{
		displayName: 'Name',
		name: 'name',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				operation: ['create'],
				resource: ['organisation'],
			},
		},
		description: 'The name of the organisation.',
	},
	{
		displayName: 'ID',
		name: 'id',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				operation: ['update', 'get', 'delete'],
				resource: ['organisation'],
			},
		},
		description: 'The ID of the organisation.',
	},
	{
		displayName: 'Simplify Response',
		name: 'simplify',
		type: 'boolean',
		default: false,
		displayOptions: {
			show: {
				resource: ['organisation'],
				operation: ['create', 'update', 'get', 'getAll'],
			},
		},
		description: 'Return simplified response. Only returns the organisation data.',
	},
	{
		displayName: 'Additional Fields',
		name: 'optionalFields',
		type: 'collection',
		displayOptions: {
			show: {
				resource: ['organisation'],
				operation: ['create'],
			},
		},
		default: {},
		description: 'Additional optional fields of the organisation.',
		placeholder: 'Add Field',
		options: [
			{
				displayName: 'Brand ID',
				name: 'brand_id',
				type: 'number',
				default: 0,
				description:
					'The brand the user is being registered to, will use the default brand if not entered.',
			},
			{
				displayName: 'Custom Fields',
				name: 'customfield',
				type: 'string',
				default: '',
				description: 'An array of custom fields values, keyed by their ID.',
			},
			{
				displayName: 'Country',
				name: 'country',
				type: 'string',
				default: '',
				description: 'Country of the user, as a two letter string like "GB".',
			},
			{
				displayName: 'Language Code',
				name: 'language_code',
				type: 'string',
				default: '',
				description:
					'The two letter language code, like "en", will default to system default if not entered.',
			},
			{
				displayName: 'Time Zone',
				name: 'timezone',
				type: 'string',
				default: '',
				description:
					'The timezone of the user, like "Europe/London", will default to system default if not entered.',
			},
			{
				displayName: 'Notes',
				name: 'notes',
				type: 'string',
				default: '',
				description: 'Any notes about the organisation, for operators only.',
			},
			{
				displayName: 'Domain',
				name: 'domain',
				type: 'string',
				default: '',
				description:
					'An array of strings that represent the domains belonging to the organisation, for example "domain.com". Will be used to automatically add users who register or email the help desk from one of the domains listed.',
			},
			{
				displayName: 'Access Level',
				name: 'groups',
				type: 'string',
				default: '',
				description:
					'An array of user access levels in organisation, keyed by the user ID. 0 - Manager, 1 - User.',
			},
		],
	},
	{
		displayName: 'Additional Fields',
		name: 'optionalFields',
		type: 'collection',
		displayOptions: {
			show: {
				resource: ['organisation'],
				operation: ['update'],
			},
		},
		default: {},
		description: 'Additional optional fields of the organisation.',
		placeholder: 'Add Field',
		options: [
			{
				displayName: 'Name',
				name: 'name',
				type: 'string',
				default: '',
				description: 'The name of the organisation.',
			},
			{
				displayName: 'Custom Fields',
				name: 'customfield',
				type: 'string',
				default: '',
				description: 'An array of custom fields values, keyed by their ID.',
			},
			{
				displayName: 'Country',
				name: 'country',
				type: 'string',
				default: '',
				description: 'Country of the user, as a two letter string like "GB".',
			},
			{
				displayName: 'Language Code',
				name: 'language_code',
				type: 'string',
				default: '',
				description:
					'The two letter language code, like "en", will default to system default if not entered.',
			},
			{
				displayName: 'Time Zone',
				name: 'timezone',
				type: 'string',
				default: '',
				description:
					'The timezone of the user, like "Europe/London", will default to system default if not entered.',
			},
			{
				displayName: 'Notes',
				name: 'notes',
				type: 'string',
				default: '',
				description: 'Any notes about the organisation, for operators only.',
			},
			{
				displayName: 'Domain',
				name: 'domain',
				type: 'string',
				default: '',
				description:
					'An array of strings that represent the domains belonging to the organisation, for example "domain.com". Will be used to automatically add users who register or email the help desk from one of the domains listed.',
			},
			{
				displayName: 'Access Level',
				name: 'groups',
				type: 'string',
				default: '',
				description:
					'An array of user access levels in organisation, keyed by the user ID. 0 - Manager, 1 - User.',
			},
		],
	},
] as INodeProperties[];
