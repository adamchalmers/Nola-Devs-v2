export interface Event {
	id: number;
	group: string;
	summary: string;
	calLink: string;
	description: string;
	location: string;
	lng: number;
	lat: number;
	start: Date;
	end: Date;
}
