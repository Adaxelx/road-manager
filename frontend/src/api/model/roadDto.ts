import { RoadSegmentDto } from "./roadSegmentDto";

export interface RoadDto {
    code?: string;
    id?: number;
    name?: string;
    type?: number;
    segments?: RoadSegmentDto[];
}
