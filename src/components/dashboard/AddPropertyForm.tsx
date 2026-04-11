'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import { Progress } from '@/components/ui/progress';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs';
import {
  Home,
  MapPin,
  Camera,
  Star,
  DollarSign,
  ArrowLeft,
  ArrowRight,
  Save,
  Eye,
  Upload,
  X,
  Plus,
  Check,
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface AddPropertyFormProps {
  onSuccess?: () => void;
}

const propertyTypes = [
  'House', 'Apartment', 'Condo', 'Townhouse', 'Villa', 
  'Penthouse', 'Studio', 'Land', 'Commercial', 'Office'
];

const amenities = [
  { id: 'pool', label: 'Swimming Pool' },
  { id: 'garage', label: 'Garage' },
  { id: 'garden', label: 'Garden' },
  { id: 'ac', label: 'Air Conditioning' },
  { id: 'heating', label: 'Central Heating' },
  { id: 'fireplace', label: 'Fireplace' },
  { id: 'gym', label: 'Gym' },
  { id: 'security', label: '24/7 Security' },
  { id: 'parking', label: 'Parking' },
  { id: 'elevator', label: 'Elevator' },
  { id: 'laundry', label: 'Laundry Room' },
  { id: 'balcony', label: 'Balcony' },
  { id: 'terrace', label: 'Terrace' },
  { id: 'wine', label: 'Wine Cellar' },
  { id: 'smart', label: 'Smart Home' },
  { id: 'pets', label: 'Pet Friendly' },
];

const steps = [
  { id: 'details', label: 'Property Details', icon: Home },
  { id: 'media', label: 'Media', icon: Camera },
  { id: 'location', label: 'Location', icon: MapPin },
  { id: 'amenities', label: 'Amenities', icon: Star },
  { id: 'pricing', label: 'Pricing', icon: DollarSign },
];

export function AddPropertyForm({ onSuccess }: AddPropertyFormProps) {
  const [activeTab, setActiveTab] = useState('details');
  const [uploadedImages, setUploadedImages] = useState<string[]>([]);
  const [selectedAmenities, setSelectedAmenities] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    propertyType: '',
    status: '',
    bedrooms: '',
    bathrooms: '',
    sqft: '',
    garage: '',
    yearBuilt: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: 'USA',
    price: '',
    priceSuffix: '',
    isFeatured: false,
  });

  const currentStepIndex = steps.findIndex((s) => s.id === activeTab);
  const progress = ((currentStepIndex + 1) / steps.length) * 100;

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const toggleAmenity = (amenityId: string) => {
    setSelectedAmenities((prev) =>
      prev.includes(amenityId)
        ? prev.filter((a) => a !== amenityId)
        : [...prev, amenityId]
    );
  };

  const handleImageUpload = () => {
    // Mock image upload
    const mockImages = [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop',
    ];
    setUploadedImages((prev) => [...prev, mockImages[prev.length % 3]]);
  };

  const removeImage = (index: number) => {
    setUploadedImages((prev) => prev.filter((_, i) => i !== index));
  };

  const goToNextStep = () => {
    const nextIndex = currentStepIndex + 1;
    if (nextIndex < steps.length) {
      setActiveTab(steps[nextIndex].id);
    }
  };

  const goToPrevStep = () => {
    const prevIndex = currentStepIndex - 1;
    if (prevIndex >= 0) {
      setActiveTab(steps[prevIndex].id);
    }
  };

  return (
    <div className="space-y-6">
      {/* Progress Bar */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">Add New Property</h2>
          <Badge variant="outline">Step {currentStepIndex + 1} of {steps.length}</Badge>
        </div>
        <Progress value={progress} className="h-2" />
        <div className="flex justify-between">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isActive = step.id === activeTab;
            const isCompleted = index < currentStepIndex;
            return (
              <button
                key={step.id}
                onClick={() => setActiveTab(step.id)}
                className={cn(
                  'flex flex-col items-center gap-1 text-xs font-medium transition-colors',
                  isActive ? 'text-homez-primary' : isCompleted ? 'text-green-600' : 'text-gray-400'
                )}
              >
                <div
                  className={cn(
                    'w-8 h-8 rounded-full flex items-center justify-center border-2 transition-colors',
                    isActive
                      ? 'border-homez-primary bg-homez-primary text-white'
                      : isCompleted
                      ? 'border-green-600 bg-green-600 text-white'
                      : 'border-gray-300'
                  )}
                >
                  {isCompleted ? (
                    <Check className="h-4 w-4" />
                  ) : (
                    <Icon className="h-4 w-4" />
                  )}
                </div>
                <span className="hidden sm:block">{step.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Form Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsContent value="details" className="space-y-6 mt-0">
          <Card>
            <CardHeader>
              <CardTitle>Property Details</CardTitle>
              <CardDescription>Enter the basic information about your property</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="md:col-span-2">
                  <Label htmlFor="title">Property Title *</Label>
                  <Input
                    id="title"
                    placeholder="e.g., Modern Luxury Villa with Ocean View"
                    value={formData.title}
                    onChange={(e) => handleInputChange('title', e.target.value)}
                    className="mt-1.5"
                  />
                </div>
                <div className="md:col-span-2">
                  <Label htmlFor="description">Description *</Label>
                  <Textarea
                    id="description"
                    placeholder="Describe your property in detail..."
                    rows={4}
                    value={formData.description}
                    onChange={(e) => handleInputChange('description', e.target.value)}
                    className="mt-1.5"
                  />
                </div>
                <div>
                  <Label>Property Type *</Label>
                  <Select onValueChange={(v) => handleInputChange('propertyType', v)}>
                    <SelectTrigger className="mt-1.5">
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      {propertyTypes.map((type) => (
                        <SelectItem key={type} value={type.toLowerCase()}>
                          {type}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label>Status *</Label>
                  <Select onValueChange={(v) => handleInputChange('status', v)}>
                    <SelectTrigger className="mt-1.5">
                      <SelectValue placeholder="Select status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="for-sale">For Sale</SelectItem>
                      <SelectItem value="for-rent">For Rent</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="bedrooms">Bedrooms</Label>
                  <Input
                    id="bedrooms"
                    type="number"
                    placeholder="0"
                    value={formData.bedrooms}
                    onChange={(e) => handleInputChange('bedrooms', e.target.value)}
                    className="mt-1.5"
                  />
                </div>
                <div>
                  <Label htmlFor="bathrooms">Bathrooms</Label>
                  <Input
                    id="bathrooms"
                    type="number"
                    placeholder="0"
                    value={formData.bathrooms}
                    onChange={(e) => handleInputChange('bathrooms', e.target.value)}
                    className="mt-1.5"
                  />
                </div>
                <div>
                  <Label htmlFor="sqft">Square Feet</Label>
                  <Input
                    id="sqft"
                    type="number"
                    placeholder="0"
                    value={formData.sqft}
                    onChange={(e) => handleInputChange('sqft', e.target.value)}
                    className="mt-1.5"
                  />
                </div>
                <div>
                  <Label htmlFor="garage">Garage</Label>
                  <Input
                    id="garage"
                    type="number"
                    placeholder="0"
                    value={formData.garage}
                    onChange={(e) => handleInputChange('garage', e.target.value)}
                    className="mt-1.5"
                  />
                </div>
                <div>
                  <Label htmlFor="yearBuilt">Year Built</Label>
                  <Input
                    id="yearBuilt"
                    type="number"
                    placeholder="e.g., 2020"
                    value={formData.yearBuilt}
                    onChange={(e) => handleInputChange('yearBuilt', e.target.value)}
                    className="mt-1.5"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="media" className="space-y-6 mt-0">
          <Card>
            <CardHeader>
              <CardTitle>Property Images</CardTitle>
              <CardDescription>Upload high-quality images of your property</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Upload Area */}
              <div className="border-2 border-dashed border-gray-200 rounded-lg p-8 text-center hover:border-homez-primary transition-colors cursor-pointer">
                <input type="file" multiple accept="image/*" className="hidden" id="image-upload" />
                <label htmlFor="image-upload" className="cursor-pointer">
                  <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600 font-medium">Drag and drop images here</p>
                  <p className="text-gray-400 text-sm mt-1">or click to browse</p>
                  <Button variant="outline" className="mt-4" onClick={handleImageUpload}>
                    <Plus className="h-4 w-4 mr-2" />
                    Select Images
                  </Button>
                </label>
              </div>

              {/* Uploaded Images Grid */}
              {uploadedImages.length > 0 && (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {uploadedImages.map((image, index) => (
                    <div key={index} className="relative group aspect-video rounded-lg overflow-hidden bg-gray-100">
                      <img src={image} alt={`Property ${index + 1}`} className="w-full h-full object-cover" />
                      <button
                        onClick={() => removeImage(index)}
                        className="absolute top-2 right-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <X className="h-4 w-4" />
                      </button>
                      {index === 0 && (
                        <Badge className="absolute bottom-2 left-2 bg-homez-primary text-white">
                          Featured
                        </Badge>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {/* Tips */}
              <div className="bg-blue-50 rounded-lg p-4">
                <p className="text-sm text-blue-800 font-medium mb-2">Image Tips:</p>
                <ul className="text-sm text-blue-700 space-y-1">
                  <li>• Upload at least 5 images for better visibility</li>
                  <li>• Use high-resolution images (min 1200x800 pixels)</li>
                  <li>• Include photos of all rooms and outdoor areas</li>
                  <li>• First image will be used as the featured image</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="location" className="space-y-6 mt-0">
          <Card>
            <CardHeader>
              <CardTitle>Property Location</CardTitle>
              <CardDescription>Enter the address and location details</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="md:col-span-2">
                  <Label htmlFor="address">Street Address *</Label>
                  <Input
                    id="address"
                    placeholder="123 Main Street"
                    value={formData.address}
                    onChange={(e) => handleInputChange('address', e.target.value)}
                    className="mt-1.5"
                  />
                </div>
                <div>
                  <Label htmlFor="city">City *</Label>
                  <Input
                    id="city"
                    placeholder="Miami"
                    value={formData.city}
                    onChange={(e) => handleInputChange('city', e.target.value)}
                    className="mt-1.5"
                  />
                </div>
                <div>
                  <Label htmlFor="state">State *</Label>
                  <Input
                    id="state"
                    placeholder="Florida"
                    value={formData.state}
                    onChange={(e) => handleInputChange('state', e.target.value)}
                    className="mt-1.5"
                  />
                </div>
                <div>
                  <Label htmlFor="zipCode">ZIP Code *</Label>
                  <Input
                    id="zipCode"
                    placeholder="33101"
                    value={formData.zipCode}
                    onChange={(e) => handleInputChange('zipCode', e.target.value)}
                    className="mt-1.5"
                  />
                </div>
                <div>
                  <Label htmlFor="country">Country *</Label>
                  <Select defaultValue="USA" onValueChange={(v) => handleInputChange('country', v)}>
                    <SelectTrigger className="mt-1.5">
                      <SelectValue placeholder="Select country" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="USA">United States</SelectItem>
                      <SelectItem value="CAN">Canada</SelectItem>
                      <SelectItem value="UK">United Kingdom</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <MapPin className="h-8 w-8 mx-auto mb-2" />
                  <p>Map preview will appear here</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="amenities" className="space-y-6 mt-0">
          <Card>
            <CardHeader>
              <CardTitle>Amenities & Features</CardTitle>
              <CardDescription>Select the amenities available at your property</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {amenities.map((amenity) => (
                  <label
                    key={amenity.id}
                    className={cn(
                      'flex items-center gap-3 p-4 rounded-lg border cursor-pointer transition-all',
                      selectedAmenities.includes(amenity.id)
                        ? 'border-homez-primary bg-red-50'
                        : 'border-gray-200 hover:border-gray-300'
                    )}
                  >
                    <Checkbox
                      checked={selectedAmenities.includes(amenity.id)}
                      onCheckedChange={() => toggleAmenity(amenity.id)}
                    />
                    <span className="text-sm font-medium">{amenity.label}</span>
                  </label>
                ))}
              </div>

              {/* Selected Amenities */}
              {selectedAmenities.length > 0 && (
                <div className="mt-6">
                  <p className="text-sm font-medium text-gray-700 mb-2">
                    Selected Amenities ({selectedAmenities.length})
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {selectedAmenities.map((id) => {
                      const amenity = amenities.find((a) => a.id === id);
                      return (
                        <Badge key={id} variant="secondary" className="py-1.5">
                          {amenity?.label}
                          <button
                            onClick={() => toggleAmenity(id)}
                            className="ml-2 hover:text-homez-primary"
                          >
                            <X className="h-3 w-3" />
                          </button>
                        </Badge>
                      );
                    })}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="pricing" className="space-y-6 mt-0">
          <Card>
            <CardHeader>
              <CardTitle>Pricing & Publish</CardTitle>
              <CardDescription>Set your price and publish your listing</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="price">Price ($) *</Label>
                  <Input
                    id="price"
                    type="number"
                    placeholder="500000"
                    value={formData.price}
                    onChange={(e) => handleInputChange('price', e.target.value)}
                    className="mt-1.5"
                  />
                </div>
                <div>
                  <Label>Price Suffix</Label>
                  <Select onValueChange={(v) => handleInputChange('priceSuffix', v)}>
                    <SelectTrigger className="mt-1.5">
                      <SelectValue placeholder="None" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="">None</SelectItem>
                      <SelectItem value="/mo">/month</SelectItem>
                      <SelectItem value="/sqft">/sqft</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                <Checkbox
                  id="featured"
                  checked={formData.isFeatured}
                  onCheckedChange={(checked) => handleInputChange('isFeatured', checked as boolean)}
                />
                <div>
                  <Label htmlFor="featured" className="cursor-pointer">
                    Mark as Featured Property
                  </Label>
                  <p className="text-sm text-gray-500">Featured properties appear at the top of search results</p>
                </div>
              </div>

              {/* Summary */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="font-semibold mb-4">Listing Summary</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Title:</span>
                    <span className="font-medium">{formData.title || 'Not set'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Type:</span>
                    <span className="font-medium capitalize">{formData.propertyType || 'Not set'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Status:</span>
                    <span className="font-medium capitalize">{formData.status?.replace('-', ' ') || 'Not set'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Location:</span>
                    <span className="font-medium">
                      {formData.city && formData.state
                        ? `${formData.city}, ${formData.state}`
                        : 'Not set'}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Price:</span>
                    <span className="font-medium text-homez-primary">
                      {formData.price
                        ? `$${Number(formData.price).toLocaleString()}${formData.priceSuffix || ''}`
                        : 'Not set'}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Images:</span>
                    <span className="font-medium">{uploadedImages.length} uploaded</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Amenities:</span>
                    <span className="font-medium">{selectedAmenities.length} selected</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Action Buttons */}
      <div className="flex items-center justify-between pt-4 border-t">
        <Button
          variant="outline"
          onClick={goToPrevStep}
          disabled={currentStepIndex === 0}
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Previous
        </Button>
        <div className="flex gap-3">
          <Button variant="outline">
            <Save className="h-4 w-4 mr-2" />
            Save Draft
          </Button>
          <Button variant="outline">
            <Eye className="h-4 w-4 mr-2" />
            Preview
          </Button>
          {currentStepIndex < steps.length - 1 ? (
            <Button className="bg-homez-primary hover:bg-homez-primary/90" onClick={goToNextStep}>
              Next
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          ) : (
            <Button className="bg-homez-primary hover:bg-homez-primary/90" onClick={onSuccess}>
              <Check className="h-4 w-4 mr-2" />
              Publish Property
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

export default AddPropertyForm;
