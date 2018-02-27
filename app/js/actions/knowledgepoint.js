import KnowledgepointServer from '../server/KnowledgepointServer'
import config from '../config'

const Path = 'knowlegepoint';

export const KNOWLEDGEPOINT = `${Path}/KNOWLEDGEPOINT`;
export const KNOWLEDGEPOINT_SUCCESS = `${Path}/KNOWLEDGEPOINT_SUCCESS`;
export const KNOWLEDGEPOINT_FAILURE = `${Path}/KNOWLEDGEPOINT_FAILURE`;

export function getKnowledgepoint() {
	return {
		type: KNOWLEDGEPOINT,
		promise: KnowledgepointServer.getData()
	}
}