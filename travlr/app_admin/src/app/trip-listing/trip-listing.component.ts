import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TripDataService } from '../services/trip-data.service';
import { Trip } from '../models/trip';

@Component({
  selector: 'app-trip-listing',
  templateUrl: './trip-listing.component.html',
  styleUrls: ['./trip-listing.component.css'],
  providers: [TripDataService]
})
export class TripListingComponent implements OnInit {
  trips: Trip[] = [];
  message: string = '';

  constructor(
    private tripDataService: TripDataService,
    private router: Router
  ) { }

  public addTrip(): void {
    this.router.navigate(['add-trip']);
  }

  private getTrips(): void {
    this.message = 'Searching for trips...';
    this.tripDataService.getTrips().subscribe({
      next: (value: Trip[]) => {
        this.trips = value;
        if (value.length > 0) {
          this.message = `Found ${value.length} trips`;
        } else {
          this.message = 'No trips found';
        }
      },
      error: (error: any) => {
        console.error('Error fetching trips:', error);
        this.message = 'Failed to load trips from REST API server.';
      }
    });
  }

  ngOnInit(): void {
    this.getTrips();
  }
}
