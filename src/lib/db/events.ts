import { model, Schema, models } from 'mongoose';
import type { Event } from '$lib/types/event.d.ts';

const eventSchema = new Schema<Event>({
	group: {
		type: String,
		required: true
	},
	summary: {
		type: String,
		required: true
	},
	calLink: String,
	description: String,
	location: String,
	lnglat: {
		type: [Number],
		index: '2dsphere'
	},
	start: {
		type: Date,
		required: true
	},
	end: Date,
	eventSlug: { type: String, required: true, unique: true },
	groupSlug: { type: String, required: true }
});

const EventModel = models.Event || model('Event', eventSchema);

export default EventModel;
