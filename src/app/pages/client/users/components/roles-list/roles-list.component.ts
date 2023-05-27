import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-roles-list',
  templateUrl: './roles-list.component.html',
  styleUrls: ['./roles-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RolesListComponent implements OnInit {

  formattedRoleList: any[] = []

  constructor(
    private cd: ChangeDetectorRef,
    private readonly userService: UserService
  ) { }

  ngOnInit() {
    this.getUserRoleList()
  }

  toggleCreateRoleModal(){
    
  }

  getUserRoleList(){
    this.userService.fetchUserProfileRoles(
      1,
      100,
      {
        entityCode: 'FBN'
      }
    ).subscribe((response) => {
      console.log(response)
      let roleList = response
      
      // Create an object to store the occurrences of each entityCode
      const result = {};

      // Iterate over the input array
      roleList.forEach(item => {
        const { entityCode } = item;
        
        // If the entityCode already exists in the result object, increment its count
        if (result.hasOwnProperty(entityCode)) {
          result[entityCode]++;
        } else {
          // If the entityCode doesn't exist, initialize its count to 1
          result[entityCode] = 1;
        }
      });

      // Convert the result object into an array of objects
      const formattedArray = Object.keys(result).map(entityCode => {
        return {
          entityCode,
          count: result[entityCode]
        };
      });

      this.formattedRoleList = formattedArray
      this.cd.detectChanges()

      console.log(this.formattedRoleList)


    })
  }

}
