import { Injectable } from '@angular/core';

export class AddItems {
  Sku?: string;
  Name?: string;
  SellingPrice?: string;
  BasePrice?: string;
  Description?: string;
}

export class itemModal {
  id?: number;
  Sku?: string;
  Name?: string;
  SellingPrice?: string;
}

export interface DetailsType {
  Sku: string;
  Name: string;
  DisplayName: string;
  BasePrice: string;
  SellingPrice: string;
  Description: string;
}

export interface ConfirmationDeleteCheck {
  title: string;
  message: string;
}
export interface ConfirmationDialogCloseCheck {
  title: string;
  message: string;
}

@Injectable({
  providedIn: 'root',
})
export class batchAdapter {
  adapt(data: any): itemModal {
    const batch = new itemModal();
    try {
      batch.Sku = data.Sku;
      batch.Name = data.Name;
      batch.SellingPrice = data.SellingPrice;
      batch.id = data.id;
    } catch (e) {
      console.log(e);
    }
    return batch;
  }
}
