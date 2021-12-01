import {
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';

export class ZammadBasicApi implements ICredentialType {
	name = 'zammadBasicApi';
	displayName = 'Zammad Basic API';
	documentationUrl = 'zammad';
	properties: INodeProperties[] = [
		{
			displayName: 'Zammad URL',
			name: 'zammadUrl',
			type: 'string',
			default: 'https://your_url.zammad.com',
			required: true,
		},
		{
			displayName: 'User Name / E-Mail',
			name: 'userName',
			type: 'string',
			default: '',
			required: true,
		},
		{
			displayName: 'Password',
			name: 'password',
			type: 'string',
			typeOptions: {
				password: true,
			},
			default: '',
			required: true,
		},
		{
			displayName: 'Ignore SSL Issues',
			name: 'allowUnauthorizedCerts',
			type: 'boolean',
			default: false,
		},
	];
}
