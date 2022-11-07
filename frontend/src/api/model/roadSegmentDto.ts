import { JunctionDto } from "./junctionDto";

export interface RoadSegmentDto {
    id?: string;
    startNode: JunctionDto;
    endNode: JunctionDto;
    length?: number;
}
